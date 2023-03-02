import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useThrottle } from 'use-throttle'

const Searchbar = ({queryHandler,suggestions}) => {
    const [activeOption,setActiveOption] = useState(0)
    const [input,setInput] = useState('')
    const scrolldiv = useRef()

    const handleInputchange =(e) =>{
        setInput(e.target.value)
    }
    

    const hanleActiveSuggestions =(e) => {
        //uparrow:38
        //downArrow:40
        switch(e.keyCode){
            case 38:
                if(activeOption===1){
                    scrolldiv.current.scrollTop = suggestions.length*39; 
                    setActiveOption(suggestions.length)
                } else if(activeOption<=suggestions.length-3){
                    scrolldiv.current.scrollTop -= 39 
                }
                if(activeOption>1){
                    setActiveOption((prev)=>prev-1);
                }
            break;
            
            case 40:
                if(activeOption===suggestions.length){
                    scrolldiv.current.scrollTop = 0
                    setActiveOption(0);
                }else if(activeOption>=4){
                    scrolldiv.current.scrollTop += 39 
                } 
                setActiveOption((prev)=>prev+1);
                break;
            default:return;
        }
    }

    //for throttling-----------------------------------------------

    const throttleText = useThrottle(input,2000)

    useEffect(()=>{
        queryHandler(throttleText)
    },[queryHandler,throttleText])

  return (
    <Wrapper onKeyUp={hanleActiveSuggestions}>
        <SearchbarWrapper>
        <Input value={input} onChange={handleInputchange}/>
        </SearchbarWrapper>
        <SuggestionBox limit={5} suggestionslength={suggestions.length} active={activeOption} ref={scrolldiv}>
        {
            suggestions.map((item,index)=>{
                return(
                    <div key={index} onMouseOver={() => setActiveOption( index + 1)}>
                        {item}
                    </div>
                )
            })
        }
        </SuggestionBox>
    </Wrapper>
  )
}

export default Searchbar

const SuggestionBox = styled.div`
    border: 1px solid black;
    border-top-color:${({suggestionslength})=>suggestionslength?'black':'transperant'};
    border-bottom-color:${({suggestionslength})=>suggestionslength?"black":"transperant"};
    max-height:${({limit}) => `${limit*39}px`};
    overflow:auto;
    & * {
        padding-left:10px;
        text-align: left;
        padding:10px;
    }
    & :nth-child(${({active})=>active}){
        background:rgba(0,0,0,0.09);
        cursor:pointer;
    }

`


const Input = styled.input`
    flex:1;
    font-size:22px;
    border:none;
    outline:none;
`
const SearchbarWrapper = styled.div`
    border: 1px solid black;
    display:flex;
    margin:auto;
`

const Wrapper = styled.div`
    max-width:350px;
    margin:auto;
`