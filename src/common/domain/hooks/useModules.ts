import {useContext} from "react";
import ModulesContext from "@modules/common/domain/contexts/ModulesContext";

const useModules = () => {
  return useContext(ModulesContext);
}

export default useModules;