import {FC, useMemo} from "react";
import {HStack, Input, Text, Textarea, VStack} from "@chakra-ui/react";
import {FIRST_COLOR_ALAY, SECOND_COLOR_ALAY} from "../../constants/colors";
import {motion} from "framer-motion";
import {alayFadeInItemVariant, alayScaleItemVariant, alayVariant} from "../../constants/animation";
import {LabelProps} from "../../interfaces/alayInterfaces";
import LabelInput from "./LabelInput";
import {FaGithub, FaInstagram, FaLinkedin, FaTiktok} from "react-icons/all";

interface HomeComponentProps {
  alayWord: string;
  handleChangeNormalWord: (text: string) => void;
  handleOpenNewTab: (url: string) => void;
  copyAlayWordToClipboard: () => void;
}

const HomeComponent: FC<HomeComponentProps> = (
  {
    alayWord,
    handleChangeNormalWord,
    handleOpenNewTab,
    copyAlayWordToClipboard
  }
) => {

  return (
    <motion.div initial="hidden" animate="visible" variants={alayVariant}>
      <VStack spacing={4} m={3} alignItems="stretch" justifyContent="center">
        <Text
          bgGradient={`linear(to-l, ${FIRST_COLOR_ALAY}, ${SECOND_COLOR_ALAY})`}
          bgClip="text"
          fontSize="4xl"
          textAlign="center"
          fontWeight="black"
        >
          4l4y GenErat0r
        </Text>
        <motion.div variants={alayFadeInItemVariant} style={{alignSelf: 'center'}}>
          <Text fontWeight="thin" fontSize={14} textAlign="center">Created By Rully Saputra</Text>
          <HStack justifyContent="center" mt={2}>
            <FaLinkedin size="30px"
                        color="#0e76a8"
                        className="social-media-icon"
                        onClick={() => handleOpenNewTab("https://www.linkedin.com/in/rully-saputra-7554a7138/")}/>
            <FaInstagram size="30px"
                         className="social-media-icon"
                         onClick={() => handleOpenNewTab("https://www.instagram.com/rully.saputra15/")}/>
            <FaTiktok size="30px"
                         className="social-media-icon"
                         onClick={() => handleOpenNewTab("https://vt.tiktok.com/ZSRJQffMh/")}/>
            <FaGithub size="30px"
                      className="social-media-icon"
                      onClick={() => handleOpenNewTab("https://github.com/rully-saputra15")}/>
          </HStack>
        </motion.div>
        <LabelInput text="Normal"/>
        <motion.div variants={alayScaleItemVariant}>
          <Textarea size="lg"
                 onChange={(ev) => handleChangeNormalWord(ev.currentTarget.value)}
                 placeholder="Type your normal words"/>
        </motion.div>
        <LabelInput text="Abnormal" description="Click pada tulisan untuk c0py text"/>
        <motion.div variants={alayScaleItemVariant}
                    style={{
                      border: `1px solid transparent`,
                      borderRadius: '10px',
                      background: `
                      linear-gradient(to right, white,white) padding-box,
                      linear-gradient(to right, ${FIRST_COLOR_ALAY},${SECOND_COLOR_ALAY}) border-box
                      `
                    }}
                    onTap={() => copyAlayWordToClipboard()}>
          <Text fontWeight="bold" p={4}>
            {alayWord}
          </Text>
        </motion.div>
      </VStack>
    </motion.div>
  );
};

export default HomeComponent;
