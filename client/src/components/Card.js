import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Axios from "axios";

export default function Form( { bucketList }) {
    function getCategoryStyles(category) {
        switch (category) {
          case "outdoor":
            return { backgroundColor: "#E3FCF7", color: "#00684A", border: "1px solid #C0FAE6" };
          case "food":
            return { backgroundColor: "#FFEAE5", color: "#970606", border: "1px solid #FFCDC7" };
        case "events":
            return { backgroundColor: "#E1F7FF", color: "#1254B7" , border: "1px solid #C3E7FE"};
          case "museums":
            return { backgroundColor: "#FEF7DB", color: "#944F01", border: "1px solid #FFEC9E"};
          default:
            return { backgroundColor: "#E3FCF7", color: "#00684A", border: "1px solid #C0FAE6" };
        }
      }
    
      function getStatusIcon(status) {
        switch (status) {
            case true: 
                return <CheckCircleIcon fontSize="small" sx={{ color: "#00684A" }}/>
            default:
                return <CheckCircleOutlineIcon fontSize="small"/>
        }
      }
    
    const updateStatus = (id) => {
        console.log('updating');
        Axios.put("http://localhost:3001/update", {
            id: id,
            newStatus: !bucketList.status,
        })
    }

    const deleteItem = (id) => {
        console.log('deleting');
        console.log(id);
        Axios.delete("http://localhost:3001/delete", { data: { id: id} })
    }
      

    return(
        <div className="card mr-24">
            <div className="position-relative">
                <img src={bucketList.image} className="image"/>
                <div className="button-container">
                    <button className="icon-button" onClick={()=> deleteItem(bucketList._id)}><DeleteOutlineIcon fontSize="small"/></button>
                    <button className="icon-button" onClick={() => updateStatus(bucketList._id)}>{getStatusIcon(bucketList.status)}</button>
                </div>
            </div>
            <div className="card-content">
                <p className="semibold">{bucketList.title}</p>
                <p className="mt-8 card-description">{bucketList.description}</p>
                <div className="flex mt-24">
                    <div className="category" style={getCategoryStyles(bucketList.category)}>
                        {bucketList.category}
                    </div>
                    <div><p className="subtitle">{bucketList.location}</p></div>
                </div>
            </div>
        </div>
    )
}