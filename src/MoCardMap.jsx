import ModCard from "./ModCard"

function MoCardMap() {
  let Mod=[
    {name:"Core Paython", duration:"45days", topic:"39", fees:"26,000" },

    {name:"Power Bi", duration:"25days", topic:"32", fees:"22,000" },

    {name:"HTML", duration:"34days", topic:"15", fees:"14,000" },
    {name:"CSS", duration:"57days", topic:"50", fees:"32,000" },
    {name:"Java Script", duration:"67days", topic:"70", fees:"32,000" },
    {name:"Tableau", duration:"45days", topic:"16", fees:"14,160" },
    {name:"CSS", duration:"57days", topic:"50", fees:"32,000" },
    {name:"Java Script", duration:"67days", topic:"70", fees:"32,000" },
    {name:"Tableau", duration:"45days", topic:"16", fees:"14,160" },
    
  ]

  return(
    <div>
      
         

  

        <ModCard Mod={Mod}></ModCard>
    </div>
  )
  
}

export default MoCardMap
