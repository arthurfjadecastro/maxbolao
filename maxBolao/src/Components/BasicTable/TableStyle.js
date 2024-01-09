import { Table, TableCell, TableContainer, TableRow } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#484848',
      default: '#484848',
    },
  },
});

export const StyledTableContainer = styled(TableContainer)({
  margin: 0,
  marginTop: 0,
  background: "#484848",
});

export const StyledTable = styled(Table)({
  minWidth: 650,
});

export const StyledTableHeadCell = styled(TableCell)(({ theme, header }) => ({
  color: header ? "#A8A8A8" : "#F2F2F2",
  fontFamily: "Satoshi",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal"
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  cursor: 'pointer',
  "&:hover": {
    backgroundColor: "#313131",
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "#F2F2F2",
}));
