import React from 'react'
// import { Search , Button} from 'semantic-ui-react'

 
class SearchForm extends React.Component {
    render() {
        
    return (
        <>
        <form>
        <input pleaceholder={"search for instructor"} value={this.props.searchValue} onChange={this.props.searchHandler}/>
        </form>
        {/* <Search  > */}

        {/* </Search> */}
       
     <h3></h3>
     </>
    )
  }
}
 
export default SearchForm;
