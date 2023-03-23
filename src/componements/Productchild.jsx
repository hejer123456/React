
import PropTypes from 'prop-types'

const Productchild = ({children,onDeleteProduct,id}) => {
  return (
    <>  
  <div className="my-4">

 </div>  
  <div className="card text-white bg-primary mb-3" >
    {children}
 </div>
 <button className="btn btn-dark" onClick={()=> onDeleteProduct(id)}>Delete</button>
       
    </>
  )
}

export default Productchild

Productchild.propTypes={
    label: PropTypes.string,
    price: PropTypes.number.isRequired
}
Productchild.defaultProps = {
    label: "My product",
    price: -1
}
