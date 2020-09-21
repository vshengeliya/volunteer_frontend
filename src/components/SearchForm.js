import React from 'react'
// import { Search , Button} from 'semantic-ui-react'

 
class SearchForm extends React.Component {
    render() {
        
    return (
        <>
        <form>
        <input placeholder={'search by name'} value={this.props.searchNameValue} onChange={this.props.searchByNameHandler}/>
        <input placeholder={'search by city'} value={this.props.searchCityValue} onChange={this.props.searchByCityHandler}/>
        </form>
       
     <h3></h3>
     </>
    )
  }
}
 
export default SearchForm;
