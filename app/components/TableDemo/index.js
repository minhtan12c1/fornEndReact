import React from 'react'
import ObjectList from 'react-object-list'
import {TextContainsFilter} from 'react-object-list/filters'
import {FontAwesome} from 'react-object-list/icons'
import 'react-object-list/dist/react-object-list.css';
import productModel from 'model/product'
import modelUtils from "model/model-utils";
import Modal from 'react-awesome-modal';
import 'react-awesome-modal/lib/style.js';
import DynamicForm from "react-dynamic-form";

import axios from '../../axios'
const mockData = require('./demo.data.json')
const columns = [
  [
    {dataKey: 'first_name', header: 'First Name', sortKey: 'first_name'},
    {dataKey: 'last_name', header: 'Last Name', sortKey: 'last_name', optional: true},
  ],
  {dataKey: 'email', header: 'Email', sortKey: 'email'},
  {dataKey: 'gender', header: 'Gender', sortKey: 'gender'},
  {dataKey: 'ip_address', header: 'IPv6', sortKey: 'ip_address', optional: true},
]
let id = Math.floor((Math.random() * 1000) + 1);
        let data = {
            id: id,
            username: "newName",
            level: "staff",
            creator: "Foo barz",
            creationDate: "2017-01-26"
        };
        // this.state.boundForm.setData(data);


class TableDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        visible : false,
        formConfig: {
          fields: [
              {
                  name: "id",
                  title: "ID",
                  type: "text",
                  isRequired: true
              },
              {
                  name: "username",
                  title: "User Name",
                  type: "text",
                  isRequired: true,
                  showOnForm: false
              },
              {
                  name: "level",
                  title: "Level",
                  type: "select",
                  data: [{name: "super", title: "Super"}, {name: "admin", title: "Admin"}, {name: "staff", title: "Staff"}],
                  isRequired: true
              },
              {
                  name: "creator",
                  title: "Creator",
                  type: "text",
                  isRequired: true
              },
              {
                  name: "creationDate",
                  title: "Created Date",
                  type: "date",
                  isRequired: true
              }
          ],
          primaryKey: "id"
        },
    }
  }
  state = {
    currentPage: 1,
    perPage: 7,
    totalCount: 6,
    sortKeys: [],
    tableHeader: [],
    // data: mockData.slice(0, 7),
    extraColumns: ['name'],
    filters: [{
      Renderer: TextContainsFilter,
      filterKey: 'name',
      active: false,
      name: 'Name',
      props: {
        updateDelay: 0,
      },
    }],
    data: [],
    dataTableModel: {},
    
    boundForm: [],
  }
  openModal() {
    this.setState({
        visible : true
    });
  }
  closeModal() {
      this.setState({
          visible : false
      });
  }
  getUsersData() {
    this.state.dataTableModel = productModel.dataModel.getDataTableModel();
    console.log(this.state.dataTableModel.visibleDataHeader.length);
    
    this.state.tableHeader = this.state.dataTableModel.visibleDataHeader;
    console.log(this.state.tableHeader);
    axios
        .get(`/product-all`, {params:{ request: '1'}})
        .then(res => {
          
          // this.state.data = res.data
          //   console.log(this.state.dataTableModel)
            let data = res.data;
            for (let i = 0; i < data.length; i++) {
              let item = modelUtils.transformTableDataToUI(
                this.state.dataTableModel,
                data[i]
              );
              if (Array.isArray(item)) {
                item.forEach((val) => {
                  this.state.data.push(Object.assign({ index: val.index }, val));
                });
              } else if (item) {
                this.state.data.push(
                  Object.assign({ index: data[i].index }, item)
                );
              }
            }
        })
        .catch((error) => {
            console.log(error)
        })
        console.log(this.state.data)
  }
  componentDidMount(){
    this.getUsersData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filters !== this.state.filters) {
      this.updateData(1)
    }
  }

  updatePage = currentPage => this.updateData(currentPage)
  updateSorting = sortKey => this.setState(prevState => {
    let sortKeys = [...prevState.sortKeys]
    const currentSort = sortKeys.find(sort => sort.sortKey === sortKey)
    let value = true
    if (currentSort !== undefined && currentSort.value === true) {
      value = false
    }
    sortKeys = [{sortKey: sortKey, value}].concat(sortKeys.filter((k) => k.sortKey !== sortKey))

    const offset = (prevState.currentPage - 1) * prevState.perPage
    return {
      sortKeys,
      data: data.sort((a, b) => {
        for (let i = 0; i < sortKeys.length; i++) {
          const order = sortKeys[i].value ? 1 : -1
          if (a[sortKeys[i].sortKey] > b[sortKeys[i].sortKey]) return -1 * order
          if (a[sortKeys[i].sortKey] < b[sortKeys[i].sortKey]) return 1 * order
        }
        return 0
      }).slice(offset, offset + prevState.perPage),
    }
  })
  updateColumns = columnKey => this.setState(prevState => {
    let extraColumns = [...prevState.extraColumns]
    if (extraColumns.includes(columnKey)) {
      extraColumns = extraColumns.filter(key => key !== columnKey)
    } else {
      extraColumns.push(columnKey)
    }
    return {extraColumns}
  })
  addFilter = newFilter => this.setState(prevState => {
    const filters = prevState.filters.map(filter => {
      if (filter.filterKey === newFilter.filterKey) {
        return {...filter, active: true}
      } else {
        return {...filter}
      }
    })
    return {filters}
  })
  removeFilter = filterKey => this.setState(prevState => {
    const filters = prevState.filters.map(filter => {
      if (filter.filterKey === filterKey) {
        return {...filter, active: false, value: ''}
      } else {
        return {...filter}
      }
    })
    return {filters}
  })
  updateFilter = ({filter: filterKey, comparison, value}) => this.setState(prevState => {
    const filters = prevState.filters.map(filter => {
      if (filter.filterKey === filterKey) {
        return {...filter, value, comparison}
      } else {
        return {...filter}
      }
    })
    return {filters}
  })
  updateData = (currentPage) => {
    let data = this.state.data
    const activeFilters = this.state.filters.filter(filter => filter.active)
    if (activeFilters.length > 0) { // filter data
      data = data.filter(row => {
        for (let i = 0; i < activeFilters.length; i++) {
          const regex = RegExp(activeFilters[i].value, 'i')
          const result = regex.test(row[activeFilters[i].filterKey])
          return result === (activeFilters[i].comparison === 'contains')
        }
        return false
      })
    }
    // paginate data
    const offset = (currentPage - 1) * this.state.perPage
    this.setState(prevState => ({
      totalCount: data.length,
      data: data.slice(offset, offset + prevState.perPage),
      currentPage,
    }))
  }
  onSaveClicked() {
    console.log("SAve Clicked...");
    let data = []
    if (data) {
        console.log("Data>>>", data);
    } else {
        console.log("Data Contains Errors...");
    }
  }
  

  render() {
    const { currentPage, perPage, totalCount, sortKeys, extraColumns, data,tableHeader, formConfig } = this.state
    return <div>
      <input type="button" value="Add" onClick={() => this.openModal()} />
      <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
          <div>
              <h1>Add</h1>
              <DynamicForm
                config={this.state.formConfig}
                controls={
                    <button type="button" className="btn btn-default" onClick={() => this.closeModal()}>
                        <span className="glyphicon glyphicon-redo" />&nbsp;Cancel
                    </button>
                }
                ref={(form) => {
                    this.state.boundForm = form;
                }}
                onSaveClicked={this.onSaveClicked.bind(this)}
            />
          </div>
      </Modal>
      <ObjectList
        columns={tableHeader}
        data={data}
        updateSorting={this.updateSorting}
        filters={this.state.filters}
        meta={{
          currentPage,
          perPage,
          totalCount,
          sortKeys,
          extraColumns,
        }}
        updatePage={this.updatePage}
        maxPages={3}
        updateColumns={this.updateColumns}
        favouritesEnabled={false}
        addFilter={this.addFilter}
        removeFilter={this.removeFilter}
        updateFilter={this.updateFilter}
        icons={FontAwesome(4)}
      />
    </div>
    
  }
}

export default TableDemo