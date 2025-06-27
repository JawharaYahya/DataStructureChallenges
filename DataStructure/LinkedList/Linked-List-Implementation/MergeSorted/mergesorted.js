 mergeSortedLists(list1,list2){

      const merged = new LinkedList;
      let current1 = list1;
         let current2 = list2;
         
         while (current1 !== null && current2 !== null) {
            
            if (current1.data < current2.data) {
               merged.add(current1.data);
              current1= current1.next;
            } 
            else {
             merged.add(current2.data);
             current2= current2.next;
            }

              }
         //append the remaining parts
         while (current1 !== null) {
            merged.add(current1.data);
            current1 = current1.next;
         } 
 while (current2 !== null) {
            merged.add(current2.data);
            current2 = current2.next;
         } 
            return merged;
            }