import Link from "next/link";
import style from "./navlinks.module.css";
import { IoHomeSharp } from "react-icons/io5";

const Navlinks = () => {
  return (
    <ul className={style.nav_list}>
      <li className={`${style.nav_iteam} active`}>
        <Link href="/" className={style.nav_links}>
          <IoHomeSharp className={style.nav_icon} />
          <p>Home</p>
        </Link>
      </li>
      <li className={style.nav_iteam}>
        <Link href="/" className={style.nav_links}>
          <IoHomeSharp className={style.nav_icon} />
          <p>Posts</p>
        </Link>
      </li>
      <li className={style.nav_iteam}>
        <Link href="/" className={style.nav_links}>
          <IoHomeSharp className={style.nav_icon} />
          <p>Download</p>
        </Link>
      </li>
      <li className={style.nav_iteam}>
        <Link href="/" className={style.nav_links}>
          <IoHomeSharp className={style.nav_icon} />
          <p>Products</p>
        </Link>
      </li>
      <li className={style.nav_iteam}>
        <Link href="/" className={style.nav_links}>
          <IoHomeSharp className={style.nav_icon} />
          <p>Version-History</p>
        </Link>
      </li>
    </ul>
  );
};

export default Navlinks;
