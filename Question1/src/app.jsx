import React, { useState } from 'react';

function maxNuts(totalKms, totalNuts, nutsPerKm, transportNuts) {
  let x = Math.floor((transportNuts * totalKms) / nutsPerKm);
  if (totalNuts > x * nutsPerKm) {
    x = Math.floor(totalNuts / nutsPerKm);
  }
  return x;
}

function App() {
  const [inputs, setInputs] = useState(null);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setInputs(input);    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    var splitString = inputs.split(",");
    //validate that inputs has a total lenght of 4 values inside the , 
    if(splitString.length === 4)
    {      
      let totalKms = parseInt(splitString[0]);
      let totalNuts = parseInt(splitString[1]);
      let nutsPerKm = parseInt(splitString[2]);
      let transportNuts = parseInt(splitString[3]);
      let maxNumberOfNutsByTransport = maxNuts(totalKms, totalNuts,nutsPerKm, transportNuts );
      alert("The max number of nuts we can transport is"+ maxNumberOfNutsByTransport);      
    }
    else {
      alert("must have a total lenght of 4 values divided by , ");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={5}
          cols={50}
          placeholder="D,N,F,C"
          value={inputs}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;