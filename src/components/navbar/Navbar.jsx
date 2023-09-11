import { Box, Stack } from "@mui/joy";
import SearchInput from "../UI/SearchInput";

function Navbar() {
  return (
    <Stack>
      <Box>
        <p>Logo</p>
      </Box>
      <Box>
        <SearchInput />
      </Box>
      <Box>
        <p>Others</p>
      </Box>
    </Stack>
  );
}

export default Navbar;
