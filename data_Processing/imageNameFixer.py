import os

# code for fixing image names

directory = 'weapons'
for filename in os.listdir(directory):
    if filename.endswith('.png'):
        new_filename = filename.replace('-s-', 's-')
        if new_filename != filename:
            os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))
            print(f'Renamed: {filename} to {new_filename}')
