import '../../assets/style/header/header.scss';
import logo from '../../assets/image/header/Walmart_logo.svg'
import grid from '../../assets/image/header/menu-grid.svg'
import downArrow from '../../assets/image/header/down-arrow.svg';
import location from '../../assets/image/header/location.svg';
import house from '../../assets/image/header/house.svg';

export const HeaderComponent = () => {

  const rightNav = ['Grocery & essentials', 'Tech', 'Fashion', 'Home', 'Top Toys List', 'Baby Days!', 'Flash picks', 'Walmart+']
  return (
    <>
      <header class='header'>
        <div class='nav_items item'>
          <a class='cursor_pointer'>
            <img class='logo' src={logo} alt='walmartLogo' />
          </a>
        </div>

        <div class='nav_items item'>
          <img class='icon_space' src={grid} alt='department' />
          <span class='cursor_pointer item'>Departments</span>
        </div>

        <div class='nav_items item'>
          <img class='icon_space' src={grid} alt='department' />
          <span class='cursor_pointer item'>Servies</span>
        </div>

        <form class='search_form'>
          <div class='search_bar'>
            <input class='search_bar--input' placeholder='Search everything at Walmart online and in store'></input>
          </div>
        </form>

        <div class='nav_items item d-flex'>
          <span class='d-flex al-center'>
            <img class='icon_space' src={grid} alt='department' />
          </span>
          <span class='cursor_pointer d-block'>
            <span class='top-content'>Reorder</span>
            <span class=''>My Items</span>
          </span>
        </div>

        <div class='nav_items item d-flex'>
          <span class='d-flex al-center'>
            <img class='icon_space' src={grid} alt='department' />
          </span>
          <span class='cursor_pointer d-block'>
            <span class='top-content'>Sign In</span>
            <span class=''>Account</span>
          </span>
        </div>


        <div class='nav_items item '>
          <span class='d-flex ju-center cursor_pointer'>
            <img class='icon_space' src={grid} alt='department' />
          </span>
          <span class='top-content price cursor_pointer'>$0.00</span>
        </div>
      </header>

      <div class='sub_header d-flex al-center just-bet'>
        <div class='left_content d-flex al-center'>

          <img class='left_content-img' />
          <span class='cursor_pointer'>How do you want your items?</span>
          <img src={downArrow} alt='downArrow' class='down-arrow cursor_pointer' />

          <span class='seperator'>|</span>

          <img src={location} alt='downArrow' class='location-img' />
          <span class='seperator fonts cursor_pointer'>
            Sacramento, 95829
          </span>

          <img src={house} alt='house' class='location-img' />
          <span class='seperator fonts cursor_pointer'>
            Sacramento Supercenter
          </span>
        </div>

        <div class='right_content'>
          <div>
            {rightNav.map((it) => {
              return <span class='pad__left_right cursor_pointer'>{it}</span>
            })}
          </div>
        </div>
      </div>
    </>
  )
}