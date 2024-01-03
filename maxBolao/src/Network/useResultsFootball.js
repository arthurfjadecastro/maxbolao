import clientService from "../Network/httpService";
import { useRequest } from "../Network/CustomHooks";

const useResultsFootball = () => useRequest(clientService.resultsFootball);

export default useResultsFootball;
