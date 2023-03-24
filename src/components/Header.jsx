import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <header className="bg-teal-800 py-5 text-white font-serif px-[10vw]">
        <article>
          <main className="flex justify-between items-center max-sm:flex-col max-sm:gap-4">
            <div className="italic text-3xl font-bold">Momos Centre</div>
            <span
              // onClick={this.handleClick}
              className="hidden  text-4xl"
              // max-md:block
            >
              ≡
            </span>
            <span className="hidden">X</span>
            <nav className="">
            {/* max-md:hidden */}
              <ul className="flex items-center gap-10">
                <li>
                  <Link to={"/"}>HOME</Link>
                </li>
                <li>
                  <Link to={"/product"}>PRODUCTS</Link>
                </li>
                <li>
                  <Link
                    to={"/cart"}
                    className="flex gap-1 bg-yellow-300 rounded-lg px-[5px] py-[1px]"
                  >
                    <span className="text-black">{cart.totalItems}</span>
                    <span className="">🛒</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </main>
        </article>
      </header>
    </>
  );
};

export default Header;

// export class Header extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       show: false,
//     };
//   }

//   handleClick = () => {
//     this.setState = {
//       show: true,
//     };
//   };

//   render() {
//     return (
//       <>
//         <header className="bg-teal-800 py-5 text-white font-serif px-[10vw]">
//           <article>
//             <main className="flex justify-between items-center">
//               <div className="italic text-3xl font-bold">Momos Center</div>
//               <span
//                 onClick={this.handleClick}
//                 className="hidden max-md:block text-4xl"
//               >
//                 ≡
//               </span>
//               <span className="hidden">X</span>
//               <nav className="max-md:hidden">
//                 <ul className="flex items-center gap-10">
//                   <li>
//                     <Link to={"/"}>HOME</Link>
//                   </li>
//                   <li>
//                     <Link to={"/product"}>PRODUCTS</Link>
//                   </li>
//                   <li>
//                     <Link
//                       to={"/cart"}
//                       className="flex gap-1 bg-yellow-300 rounded-lg px-[5px] py-[1px]"
//                     >
//                       <span className="text-black">10</span>
//                       <span className="">🛒</span>
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </main>
//           </article>
//         </header>
//       </>
//     );
//   }
// }

// export default Header;
