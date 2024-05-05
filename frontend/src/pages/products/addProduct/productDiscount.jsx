import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function ProductDiscount() {
  return (
    <Grid container xs={12} spacing={5}>
      <Grid xs={6}>
        <Card sx={{ border: "2px solid black" }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <EditIcon />
                <Typography variant="body1" sx={{ marginLeft: "4px" }}>
                  Edit
                </Typography>
              </IconButton>
            }
            title="Billing Address"
            subheader="Sofia Havertz"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              (+1) 234 567 890
              <br />
              345 Long Island, NewYork, United States
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={6}>
        <Card sx={{ border: "2px solid black" }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <EditIcon />
                <Typography variant="body1" sx={{ marginLeft: "4px" }}>
                  Edit
                </Typography>
              </IconButton>
            }
            title="Shipping Address"
            subheader="Sofia Havertz"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              (+1) 234 567 890
              <br />
              345 Long Island, NewYork, United States
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
