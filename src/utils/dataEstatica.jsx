import { FaVrCardboard } from "react-icons/fa6";
import { FaCube } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import { MdSearch } from "react-icons/md";
import logoreact from "../assets/react.svg"
import { CgNotes } from "react-icons/cg";
import duolingocheck from "../assets/duolingo/asset 11.svg"
import duolingopesas from "../assets/duolingo/asset 12.svg"
import duolingolibro from "../assets/duolingo/asset 13.svg"
import duolingocofre from "../assets/duolingo/asset 9.svg"
import duolingofin from "../assets/duolingo/asset 10.svg"
import animacionduolingo1 from "../assets/duolingo/duolingo1.json"
import animacionduolingo2 from "../assets/duolingo/duolingo2.json"
export const reu={
    iconocard:FaVrCardboard,
    iconocube:FaCube,
    iconoflechaderecha:IoIosArrowForward,
    iconologout:CgLogOut,
    iconosearch:MdSearch,
    logoreact: logoreact,
    icononota:CgNotes,
    iconoduolingochek:duolingocheck,
    iconoduolingopesas:duolingopesas,
    iconoduolingolibro: duolingolibro,
    iconoduolingocofre: duolingocofre,
    iconoduolingofin: duolingofin,
    animacionduolingo1:animacionduolingo1,
    animacionduolingo2:animacionduolingo2
   

}
export const LinksSidebar =[
    {
        label: "#01 card-1",
        icono:<reu.iconocard/>,
        to:"/"
    },
    {
        label: "#01 card-1",
        icono:<reu.iconocube/>,
        to:"/proyecto2"
    }
]
export const CoordenadasRuta = [
    {
        id:1,
        left:"0",
        titulo:"Recuerda el pasado",
        detalle:"Demuestra tus conocimientos y alcanza el nivel Legendario",
        icono:reu.iconoduolingochek,
    },
    {
        id:2,
        left:"-50px",
        titulo:"Recuerda el pasado",
        detalle:"Demuestra tus conocimientos y alcanza el nivel Legendario",
        icono:reu.iconoduolingopesas,
    },
    {
        id:3,
        left:"-75px",
        titulo:"Recuerda el pasado",
        detalle:"Demuestra tus conocimientos y alcanza el nivel Legendario",
        icono:reu.iconoduolingolibro,
    },
    {
        id:4,
        left:"-65px",
        titulo:"cofre",
        detalle:"Demuestra tus conocimientos y alcanza el nivel Legendario",
        icono:reu.iconoduolingocofre,
    },
    {
        id:5,
        left:"-35px",
        titulo:"Recuerda el pasado",
        detalle:"Demuestra tus conocimientos y alcanza el nivel Legendario",
        icono:reu.iconoduolingolibro,
    },
    {
        id:6,
        left:"10px",
        titulo:"Recuerda el pasado",
        detalle:"Demuestra tus conocimientos y alcanza el nivel Legendario",
        icono:reu.iconoduolingopesas,
    },
    {
        id:7,
        left:"40px",
        titulo:"Recuerda el pasado",
        detalle:"Demuestra tus conocimientos y alcanza el nivel Legendario",
        icono:reu.iconoduolingolibro,
    },
    {
        id:8,
        left:"20px",
        titulo:"Recuerda el pasado",
        detalle:"Demuestra tus conocimientos y alcanza el nivel Legendario",
        icono:reu.iconoduolingopesas,
    },
    {
        id:9,
        left:"-10px",
        titulo:"cofre",
        detalle:"Demuestra tus conocimientos y alcanza el nivel Legendario",
        icono:reu.iconoduolingofin,
    },

]