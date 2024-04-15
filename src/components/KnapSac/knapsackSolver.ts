const knapsackSolver = (P: number[], W: number[], W_max: number) => {
    const N = P.length;
    let bestSolution = {
      selectedWeights: [] as number[],
      totalWeight: 0,
      totalPrice: 0
    };
    const calculateSolution = (selectedItems: boolean[]) => {
      let totalWeight = 0;
      let totalPrice = 0;
      const selectedWeights: number[] = [];
      
      for (let i = 0; i < N; i++) {
        if (selectedItems[i]) {
          totalWeight += W[i];
          totalPrice += P[i];
          selectedWeights.push(W[i]);
        }
      }
      return { selectedWeights, totalWeight, totalPrice };
    };
  
    const generateAndTestSolutions = (selectedItems: boolean[], currentItem: number) => {
      if (currentItem === N) {
        const { selectedWeights, totalWeight, totalPrice } = calculateSolution(selectedItems);
        if (totalWeight <= W_max && totalPrice > bestSolution.totalPrice) {
          bestSolution = { selectedWeights, totalWeight, totalPrice };
        }
        return;
      }
      selectedItems[currentItem] = true;
      generateAndTestSolutions(selectedItems, currentItem + 1);
      selectedItems[currentItem] = false;
      generateAndTestSolutions(selectedItems, currentItem + 1);
    };
  
    generateAndTestSolutions(new Array(N).fill(false), 0);
    return bestSolution;
  };
  
  export default knapsackSolver;
  