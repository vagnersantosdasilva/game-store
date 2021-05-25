import {useContext, useEffect, useState} from "react";
import {AuthContext} from "./useAuth";

export const useNavBarItems = () => {
    const auth = useContext(AuthContext);
    const [items, setItems] = useState([]);


    useEffect(()=>{

        const activate = (clickedItem)=>{
            if(!clickedItem.active){
                setItems(items.map(item => item.name ===clickedItem.name ?
                    {...item,activate:true} : { ...item,activate: false}
                ));
            }
        }

        const  items =[
            {name:"Jogos" , href:"/" , active:false , onClick :activate},
            {name:"Carrinho" , href:"/cart" ,active:false , onClick :activate}
        ];


        setItems(items);
    } ,[] );

    return {items}
}