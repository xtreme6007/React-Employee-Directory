import React from 'react'


function SortButton({SortResults}) {

return(
<div>

<button onClick={ e => SortResults(e)}>Click to sort</button>

</div>

)


}


export default SortButton