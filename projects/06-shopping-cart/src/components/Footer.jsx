import { useFilters } from '../hooks/useFilters';
import './Footer.css';

export function Footer() {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
  // return (
  //   <footer className='footer'>
  //     <h4><p>© 2021 React Shop</p>
  //       <span>@juanmunozbit</span>
  //     </h4>
  //     <h5>
  //       Shopping Cart Con useContext y useReducer
  //     </h5>

  //   </footer>
  // )
}