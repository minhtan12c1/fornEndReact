import DynamicForm from "react-dynamic-form";

class TableDemo extends React.Component {
  state = {
    formConfig: [],
  }
  

  render() {
    return <DynamicForm
    config={this.state.formConfig}
    controls={
        <button type="button" className="btn btn-default">
            <span className="glyphicon glyphicon-redo"/>&nbsp;Cancel
        </button>
    }
    ref={(form) => {
        this.boundForm = form;
    }}
    onSaveClicked={this.onSaveClicked.bind(this)}
  />
  }
}

export default TableDemo