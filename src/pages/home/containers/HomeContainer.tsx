import HomeComponent from "../components/HomeComponent";
import {useCallback, useEffect, useState} from "react";
import {alayGlossary} from "../../constants/glossary";
import {useToast} from "@chakra-ui/react";

const HomeContainer = () => {
  const [normalWord,setNormalWord] = useState("");
  const [alayWord, setAlayWord] = useState("");
  const successToast = useToast();

  useEffect(() => {
    let tempAlayWord = "";
    for (const element of normalWord) {
      if (alayGlossary[element]) {
        tempAlayWord += alayGlossary[element];
      } else {
        tempAlayWord += element
      }
    }
    setAlayWord(tempAlayWord);
  },[normalWord])

  const handleChangeNormalWord = useCallback((text: string) => {
    const loweredText = text.toLowerCase()
    setNormalWord(loweredText)
  },[])

  const copyAlayWordToClipboard = useCallback(() => {
    navigator.clipboard.writeText(alayWord)
      .then(r => (
        successToast({
          title: 'Sukses',
          description: `Kata-kata 4l4ymU udah diCopy neeh`,
          status: 'success',
          duration: 1000,
          isClosable: true,
          position: "bottom"
        })
      ));
  },[alayWord])

  const handleOpenNewTab = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  return (
    <HomeComponent alayWord={alayWord}
                   copyAlayWordToClipboard={copyAlayWordToClipboard}
                   handleOpenNewTab={handleOpenNewTab}
                   handleChangeNormalWord={handleChangeNormalWord}/>
  )
}

export default HomeContainer;
