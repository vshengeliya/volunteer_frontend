import React from 'react'
import { Search , Button, List} from 'semantic-ui-react'
import "../Search.css"

 
class SearchForm extends React.Component {
    render() {
        
    return (
        <>
        <form>
       <div className="container-1">
         
          <input type="search" id="search" placeholder={'search by name'} value={this.props.searchNameValue} onChange={this.props.searchByNameHandler}/>

        <input type="search" id="search" placeholder={'search by city'} value={this.props.searchCityValue} onChange={this.props.searchByCityHandler}/>
      
       </div>
        </form>
       
     <h3></h3>
     </>
    )
  }
}
 
export default SearchForm;
