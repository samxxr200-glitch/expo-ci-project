import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

type Product = {
  id: string;
  name: string;
  price: string;
};

const products: Product[] = [
  { id: 'wireless-headphones', name: 'Wireless Headphones', price: '$79.99' },
  { id: 'smart-watch', name: 'Smart Watch', price: '$149.99' },
  { id: 'portable-speaker', name: 'Portable Speaker', price: '$59.99' },
  { id: 'phone-stand', name: 'Aluminum Phone Stand', price: '$24.99' },
  { id: 'usb-c-charger', name: 'USB-C Fast Charger', price: '$34.99' },
];

export default function ProductsScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <FlatList
          data={products}
          keyExtractor={(product) => product.id}
          contentContainerStyle={styles.content}
          ListHeaderComponent={
            <ThemedView style={styles.header}>
              <ThemedText type="subtitle">Products</ThemedText>
              <ThemedText themeColor="textSecondary">Browse our featured products.</ThemedText>
            </ThemedView>
          }
          renderItem={({ item }) => (
            <ThemedView type="backgroundElement" style={styles.productRow}>
              <ThemedText>{item.name}</ThemedText>
              <ThemedText type="smallBold">{item.price}</ThemedText>
            </ThemedView>
          )}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    padding: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.two,
  },
  header: {
    gap: Spacing.one,
    marginBottom: Spacing.two,
  },
  productRow: {
    minHeight: 64,
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
});
