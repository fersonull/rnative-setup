import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-blue-500 font-bold">You're all set!</Text>
      <Text className="">repo by fersonull</Text>
      <Link href="/onboarding" className="mt-5 text-blue-400 underline">Sample router link</Link>
    </View >
  );
}
