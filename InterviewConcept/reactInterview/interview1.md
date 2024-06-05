# In counter app:
     code:
     let [counter, setCounter] = useState(15);
       const addValue = () => {
       setCounter(counter + 1);
       setCounter(counter + 1);
       setCounter(counter + 1);
       setCounter(counter + 1);
     };

# Question :
     in one click what is value of counter which will be displayed 
     in ui

# Ans:
     useState:  update which needs to send in UI,they are send in batch 
     when 
            setCounter(counter + 1);
            setCounter(counter + 1);
            setCounter(counter + 1);
            setCounter(counter + 1);
 
    all are treated just one batch as they are doing same work 
    that's why one incrmenetd by 1

# If we need to increment just like above then we can use preCount(just a name )
   let's  see how we can use  

    setCounter((prevCount)=>prevCount+1)
    setCounter((prevCount)=>prevCount+1)
    setCounter((prevCount)=>prevCount+1)

      now it is not a batch it is diiffernt sate 
          prevCount : last updated state of counter 
    