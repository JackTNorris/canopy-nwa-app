import React from 'react';
import {View} from 'react-native';
import {CustomMultiselect} from '@src/components/CustomMultiselect';

const allergies = [
  'Pollen',
  'Dust Mites',
  'Molds',
  'Latex',
  'Cockroaches',
  'Animal Dander',
  'Milk',
  'Eggs',
  'Fish',
  'Shellfish',
  'Tree Nuts',
  'Peanuts',
  'Wheat',
  'Soy',
  'Citrus Fruits',
  'Grass',
  'Insect Stings',
  'Mustard',
  'Sesame',
  'Red Meat',
  'Rice',
  'Sulfites',
  'Tartrazine',
  'Balsam of Peru',
  'Nickel',
  'Gold',
  'Chromium',
  'Cobalt',
  'Formaldehyde',
  'Thiomersal',
  'Toluene diisocyanate',
  'Pollen from trees',
  'Pollen from grass',
  'Pollen from weeds',
  'Cat Dander',
  'Dog Dander',
  'Horse Dander',
  'Rabbit Dander',
  'Rodent Dander',
  'Bee Sting',
  'Wasp Sting',
  'Hornet Sting',
  'Fire Ant Sting',
  'Mold Spores',
  'Penicillin',
  'Sulfonamides',
  'Salicylates',
  'Aspirin',
  'Ibuprofen',
  'Naproxen',
  'Acetaminophen',
  'Cephalosporins',
  'Chemotherapy drugs',
  'Monosodium glutamate (MSG)',
  'Artificial colors',
  'Artificial flavors',
  'Preservatives',
  'Nightshades',
  'Avocado',
  'Banana',
  'Strawberries',
  'Tomatoes',
  'Chocolate',
  'Coffee',
  'Corn',
  'Honey',
  'Sunflower Seeds',
  'Flax Seeds',
  'Walnuts',
  'Cashews',
  'Almonds',
  'Pistachios',
  'Brazil Nuts',
  'Pecans',
  'Oats',
  'Rye',
  'Barley',
  'Kiwifruit',
  'Mango',
  'Peaches',
  'Apples',
  'Melons',
  'Papaya',
  'Lychee',
  'Pineapple',
  'Grapes',
  'Coconuts',
  'Cinnamon',
  'Garlic',
  'Onions',
  'Peppercorn',
  'Herbs',
  'Wine',
  'Beer',
  'Spirits',
  'Cider',
  'Tea',
  'Artificial sweeteners',
  'Dairy additives',
  'Egg substitutes',
  'Soy products',
];

export type AllergyPickerProps = {
  onChange: (value: string[]) => void;
};
export const AllergyPicker = ({onChange}: AllergyPickerProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <CustomMultiselect
        placeholder="Allergies"
        options={allergies.map(value => ({label: value, value}))}
        onChange={onChange}
      />
    </View>
  );
};
