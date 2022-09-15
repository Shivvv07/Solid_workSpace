import '../../assets/style/body/body.scss';
import { ComponentOne, ComponentTwo } from './subPage';


export const ContentComponent = () => {
  return (
    <div class='parent_container'>
      <div class='container'>

        <ComponentOne />
        <ComponentTwo />
      </div>
    </div>
  )
}