import pandas as pd

# test version of data compare soft

def compare_csv(file1, file2):
    df1 = pd.read_csv(file1)
    df2 = pd.read_csv(file2)

    comparison = df1.compare(df2, keep_shape=False)

    if comparison.empty:
        print("The two CSV files are identical.")
    else:
        print("Differences found:")
        
        for index, row in comparison.iterrows():
            print(f"Row {index + 1}:")
            for column in comparison.columns.levels[0]:
                if (column, 'self') in row and (column, 'other') in row:
                    self_value = row[(column, 'self')]
                    other_value = row[(column, 'other')]
                    if pd.notna(self_value) and pd.notna(other_value):
                        print(f"  - {column}: {self_value} (File 1) != {other_value} (File 2)")

if __name__ == "__main__":
    file1 = 'daggerNormal.csv'
    file2 = 'daggerCrystal.csv'
    compare_csv(file1, file2)
