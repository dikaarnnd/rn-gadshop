import { PRODUCTS } from 'assets/products'
import { FlatList, View, Text } from 'react-native'

export default function Home() {
  return (
    <View>
      <FlatList 
      data={PRODUCTS} 
      renderItem={({item}) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      ListHeaderComponent={<Text>Products</Text>}
      contentContainerClassName='pb-5'
      columnWrapperClassName='justify-between'
      className='px-4 py-2'
    />
    </View>
  )
}