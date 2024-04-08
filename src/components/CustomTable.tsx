import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export type CustomTableProps = {
  headers: string[];
  data: string[][];
  onClickRow?: (rowNume: number) => void;
  style?: StyleSheet.NamedStyles<any>;
};

const styles = StyleSheet.create({
  table: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  col: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
});

export const CustomTable = ({data, headers, style}: CustomTableProps) => {
  return (
    <View style={{...styles.table, ...style}}>
      <View style={styles.col}>
        {headers.map((header, index) => {
          return (
            <View style={styles.headerContainer} key={index}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderBottomWidth: 2,
                }}>
                {header}
              </Text>
            </View>
          );
        })}
      </View>
      {data.map((row, index) => {
        return (
          <TouchableOpacity style={styles.col} key={index}>
            {row.map((cell, index) => {
              return (
                <View style={styles.cell} key={index}>
                  <Text>{cell}</Text>
                </View>
              );
            })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
