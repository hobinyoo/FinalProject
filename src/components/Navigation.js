import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 420 }} value={value} onChange={handleChange} style={{position:"absolute", bottom: 0 , borderRadius: "10px"}}>
      <BottomNavigationAction
        label="Main"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Plan"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Chat"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Mypage" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
