function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let cart = arr[i]; // L'élément à insérer
      let j = i - 1;
  
      // Déplacez les éléments de arr[0..i-1], qui sont plus grands que key,
      // d'une position vers la droite pour faire de la place à key
      while (j >= 0 && arr[j] > cart) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = cart; // Insérez key à sa position correcte
    }
    return arr;
  }