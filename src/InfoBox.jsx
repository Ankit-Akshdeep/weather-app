import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

function InfoBox({info}){

    const IMG_URl = "https://images.unsplash.com/photo-1585160113536-a14b15e40174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGRlbGhpfGVufDB8fDB8fHww";

    return(
        <div className="InfoBox">
        <br /><br />
        <div className='cardContainer'>   
        <Card sx={{ maxWidth: 350 }}>

            <CardMedia sx={{ height: 200 }} image={IMG_URl} title="green iguana"/>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> {info.city} </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <div>Temperature : {info.temp}&deg;</div>
                    <div>Humidity: {info.humidity}</div>
                    <div>Maximum Temperature: {info.tempMax}&deg;</div>
                    <div>Minimum Temperature:{info.tempMin}&deg;</div>
                    <div>Feels Like: {info.feelsLike}&deg;</div>
                    <div>Weather:{info.weather}</div>
                </Typography>
            </CardContent>

            
        </Card>
        </div> 
        </div>
    );
}

export default InfoBox;