import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuWallet } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { IoReceiptOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

import Li from "./ListItem";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-between items-center gap-10 w-full">
      <Link href={"/"}>
        <h1 className="text-4xl">
          <b>FINE</b>bank.<b>IO</b>
        </h1>
      </Link>

      <ul className="w-full flex flex-col justify-between items-center gap-3">
        <Li icon={<HiOutlineSquares2X2 />} title="Overview" link="/" />

        <Li icon={<LuWallet />} title="Balances" link="/Balances" />

        <Li icon={<GrTransaction />} title="Trancastion" link="/Trancastion" />

        <Li icon={<LiaMoneyBillSolid />} title="Bills" link="/Bills" />

        <Li icon={<IoReceiptOutline />} title="Expenses" link="/Expenses" />

        <Li icon={<GoGoal />} title="Goals" link="/Goals" />

        <Li icon={<IoSettingsOutline />} title="Settings" link="/Settings" />
      </ul>
    </nav>
  );
};

export default Navbar;
