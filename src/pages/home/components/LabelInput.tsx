import {FC, memo} from "react";
import {motion} from "framer-motion";
import {alayFadeInItemVariant} from "../../constants/animation";
import {Text} from "@chakra-ui/react";

interface LabelInputProps {
  text: string;
  description?: string;
}

const LabelInput: FC<LabelInputProps> = (
  {
    text,
    description
  }
) => {
  return (
    <motion.div variants={alayFadeInItemVariant}>
      <Text textAlign="left"
            fontWeight="bold"
      >
        {text}
      </Text>
      {
        description && (
          <Text textAlign="left"
                fontWeight="thin"
                fontStyle="italic"
                fontSize={14}
          >
            Cl1ck p4da tulis4n dib4wa4h untuk c0py text
          </Text>
        )
      }
    </motion.div>
  );
};

export default memo(LabelInput);
