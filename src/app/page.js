import Image from 'next/image'
import styles from './page.module.css'
import Navbar from "./components/navbar";
import Shop from './components/shop';


export default function Home() {
  return (
    <div>
      <Shop />
    </div>
  )
}
