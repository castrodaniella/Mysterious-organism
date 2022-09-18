// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(organismNumber, arr) {
  return {
    specimenNum: organismNumber,
    dna: arr,
    mutate() { 
      let mutatedDna = mockUpStrand();
      if(this.dna[0] === mutatedDna[0]) {
        let newBase = returnRandBase()
        while(returnRandBase === this.dna[0]){
          newBase = returnRandBase()
        }
        mutatedDna.shift()
        mutatedDna.unshift(newBase)
        return mutatedDna
      }else{
        return mutatedDna
      }
    },
    compareDNA(anotherPAequor) {
      let sum = 0;
      anotherPAequor = this.mutate();
      sum =  anotherPAequor.filter((elem, index) => elem === this.dna[index]).reduce((preValue, curValue) => sum = sum +1);
      let commonPercentage = Math.floor((sum/15)*100);
       return `specimen #1 and specimen #2 have ${commonPercentage}% DNA in common`
    },
    willLikeSurvive(){
      let sum=0;
      let willLikeSurvivePerc = 0;
      for(let i=0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          sum=sum+1;
        }
      }
      willLikeSurvivePerc = Math.floor((sum/15)*100);
      if(willLikeSurvivePerc > 60){
        return true
      } else{
        return false
      }
        
    },

  }
}

function createPaequor(){
  let pAequor = [];
  let willSurvive =[];
  for(let i=0; willSurvive.length<30; i++){
    
    pAequor[i] = pAequorFactory(i, mockUpStrand());
    if(pAequor[i].willLikeSurvive() === true){
      willSurvive.push(pAequor[i].dna);
   // console.log(pAequor[i])
    }
  }
  
  return willSurvive
}




console.log(createPaequor());

//console.log(nDna.dna)
//console.log(nDna.mutate());

//console.log(nDna.compareDNA());

//console.log(nDna.willLikeSurvive());




