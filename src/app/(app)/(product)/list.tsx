import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { FlatList, Image, View } from "react-native";

export default function ProductListPage() {
  const categories = [
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
    {
      id: 3,
      name: "Category 3",
    },
    {
      id: 4,
      name: "Category 4",
    },
    {
      id: 5,
      name: "Category 5",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Product 1",
      category: "Category 1",
      price: 100,
      image: "https://picsum.photos/1000",
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category 2",
      price: 200,
      image: "https://picsum.photos/1000",
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category 3",
      price: 300,
      image: "https://picsum.photos/1000",
    },
    {
      id: 4,
      name: "Product 4",
      category: "Category 4",
      price: 400,
      image: "https://picsum.photos/1000",
    },
    {
      id: 5,
      name: "Product 5",
      category: "Category 5",
      price: 500,
      image: "https://picsum.photos/1000",
    },
    {
      id: 6,
      name: "Product 6",
      category: "Category 6",
      price: 600,
      image: "https://picsum.photos/1000",
    },
    {
      id: 7,
      name: "Product 7",
      category: "Category 7",
      price: 700,
      image: "https://picsum.photos/1000",
    },
    {
      id: 8,
      name: "Product 8",
      category: "Category 8",
      price: 800,
      image: "https://picsum.photos/1000",
    },
  ];
  return (
    <View className="flex-1 items-center p-4 gap-4">
      <View className="w-full">
        <Input
          placeholder="Search for a product"
          returnKeyType="search"
          onSubmitEditing={() => {}}
        />
      </View>
      <View className="w-full">
        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Button variant={index === 0 ? "default" : "outline"}>
              <Text variant="default">{item.name}</Text>
            </Button>
          )}
          ItemSeparatorComponent={() => <View className="w-2" />}
        />
      </View>
      <View className="w-full flex-1">
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View className="flex-1">
              <Card>
                <CardContent className="p-3 py-0">
                  <Image
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    className="w-full aspect-4/5 rounded-lg object-cover"
                  />
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-1 px-4">
                  <Text variant="lead" className="font-semibold">
                    {item.name}
                  </Text>
                  <Text variant="lead" className="text-blue-400 font-semibold">
                    ${item.price.toLocaleString()}
                  </Text>
                </CardFooter>
              </Card>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ columnGap: 6 }}
          contentContainerStyle={{ rowGap: 6 }}
        />
      </View>
    </View>
  );
}
