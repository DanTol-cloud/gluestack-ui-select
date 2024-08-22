import { useState } from "react";
import {
  NativeBaseProvider,
  Center,
  Box,
  Select,
  CheckIcon,
} from "@gluestack-ui/themed-native-base";

export default function App() {
  const [service, setService] = useState("");
  return (
    <NativeBaseProvider>
      <Center height="100%">
        <Box
          maxW="300"
          flex="1"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
