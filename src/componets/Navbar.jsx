
import { Link } from "react-scroll";
import { IoHome } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { GrContact } from "react-icons/gr";

const Navbar = () => {
  
  return (
    <>
      <div className="flex justify-center ">
        <ul className="flex fixed bottom-5 gap-4  pt-2 z-50">
          <li className="bg-zinc-700 hover:bg-yellow-500 p-2 rounded-[50%]">
            
            <Link
              activeClass="active"
              to="home"
              smooth={true}
            >
              <IoHome className="md:size-6 text-white" />
            </Link>
          </li>
          <li className="bg-zinc-700 hover:bg-yellow-500  p-2 rounded-[50%]">
          <Link
              activeClass="active"
              to="about"
              smooth={true}
            >
              <IoPersonSharp className="md:size-6 text-white" />
            </Link> 
          </li>
          <li className="bg-zinc-700 hover:bg-yellow-500  p-2 rounded-[50%]">
          <Link
              activeClass="active"
              to="edu"
              smooth={true}
            >
              <MdCastForEducation className="md:size-6 text-white" />
            </Link>
          </li>
          <li className="bg-zinc-700 hover:bg-yellow-500  p-2 rounded-[50%]">
          <Link
              activeClass="active"
              to="contact"
              smooth={true}
            >
              <GrContact className="md:size-6 text-white" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
