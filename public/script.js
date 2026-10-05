let problems = [{"id":"deleteSecond","title":"Problem 1: Delete an Element","description":"Write the definition of the member function <b>deleteSecond</b>. The function deletes the second element of the calling object.","parameters":"None","returnType":"void","assumptions":"The array contains at least two elements.","tests":[{"input":"[10, 20]","expected":"[10]"},{"input":"[10, 20, 30]","expected":"[10, 30]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 5, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6]","expected":"[1, 3, 4, 5, 6]"},{"input":"[0, 0]","expected":"[0]"}]},{"id":"swapSecondLast","title":"Problem 2: Swap Values","description":"Write the definition of the member function <b>swapSecondLast</b>. The function swaps the value stored in the second element with the value stored in the last element.","parameters":"None","returnType":"void","assumptions":"The array contains at least two elements.","tests":[{"input":"[10, 20]","expected":"[10, 20]"},{"input":"[10, 20, 30]","expected":"[10, 30, 20]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 9, 5, 3, 2]"},{"input":"[0, 2, 4, 6, 8, 10]","expected":"[0, 10, 4, 6, 8, 2]"},{"input":"[1, 7, 3, 7]","expected":"[1, 7, 3, 7]"}]},{"id":"zeroFirstHalf","title":"Problem 3: Modify Elements","description":"Write the definition of the member function <b>zeroFirstHalf</b>. The function replaces every value in the first half of the array with 0.","parameters":"None","returnType":"void","assumptions":"The array contains an even number of elements and contains at least two elements.","tests":[{"input":"[10, 20]","expected":"[0, 20]"},{"input":"[6, 2, 5, 3]","expected":"[0, 0, 5, 3]"},{"input":"[1, 2, 3, 4, 5, 6]","expected":"[0, 0, 0, 4, 5, 6]"},{"input":"[1, 2, 3, 4, 5, 6, 7, 8]","expected":"[0, 0, 0, 0, 5, 6, 7, 8]"},{"input":"[0, 0, 5, 9]","expected":"[0, 0, 5, 9]"}]},{"id":"replaceLast","title":"Problem 4: Replace an Element","description":"Write the definition of the member function <b>replaceLast</b>. The function replaces the value stored in the last element with the value passed by the parameter.","parameters":"An integer","returnType":"void","assumptions":"The array contains at least one element.","tests":[{"input":"[10], value = 25","expected":"[25]"},{"input":"[10, 20], value = 30","expected":"[10, 30]"},{"input":"[6, 2, 5, 3, 9], value = 40","expected":"[6, 2, 5, 3, 40]"},{"input":"[1, 2, 3], value = 0","expected":"[1, 2, 0]"},{"input":"[10, 20, 30], value = 30","expected":"[10, 20, 30]"}]},{"id":"search","title":"Problem 5: Search for a Value","description":"Write the definition of the member function <b>search</b>. The function determines whether the value passed by the parameter is stored in the array. <b>Terminate the loop once the value is found.</b>","parameters":"An integer","returnType":"bool","assumptions":"The array contains at least one element and contains no duplicate values.","tests":[{"input":"[10, 20, 30, 40, 50], value = 10","expected":"true"},{"input":"[10, 20, 30, 40, 50], value = 30","expected":"true"},{"input":"[10, 20, 30, 40, 50], value = 50","expected":"true"},{"input":"[10, 20, 30, 40, 50], value = 25","expected":"false"},{"input":"[7], value = 9","expected":"false"}]},{"id":"insertSecond","title":"Problem 6: Insert a New Element","description":"Write the definition of the member function <b>insertSecond</b>. The function inserts the value passed by the parameter as the second element of the array. Existing elements must remain in their original relative order.","parameters":"An integer","returnType":"void","assumptions":"The array contains at least one element and has enough capacity for one additional element.","tests":[{"input":"[10], value = 20","expected":"[10, 20]"},{"input":"[10, 30], value = 20","expected":"[10, 20, 30]"},{"input":"[1, 3, 4, 5, 6], value = 2","expected":"[1, 2, 3, 4, 5, 6]"},{"input":"[2, 4, 6, 8], value = 0","expected":"[2, 0, 4, 6, 8]"},{"input":"[5, 5, 5], value = 5","expected":"[5, 5, 5, 5]"}]},{"id":"copyTo","title":"Problem 7: Copy to Another DArray","description":"Write the definition of the member function <b>copyTo</b>. The function copies all elements from the calling object into the parameter object.","parameters":"A DArray object","returnType":"void","assumptions":"The calling object contains at least one element. The parameter object is empty and has enough capacity.","tests":[{"input":"calling = [10], parameter = []","expected":"[10]"},{"input":"calling = [10, 20], parameter = []","expected":"[10, 20]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = []","expected":"[6, 2, 5, 3, 9]"},{"input":"calling = [0, 2, 0, 4], parameter = []","expected":"[0, 2, 0, 4]"},{"input":"calling = [7, 7, 3, 7], parameter = []","expected":"[7, 7, 3, 7]"}]},{"id":"copyOddFrom","title":"Problem 8: Copy from Another DArray","description":"Write the definition of the member function <b>copyOddFrom</b>. The calling object is initially empty. Copy only the odd values from the parameter object into the calling object. Preserve their original order.","parameters":"A DArray object","returnType":"void","assumptions":"The parameter object contains at least one element. The calling object is empty and has enough capacity.","tests":[{"input":"calling = [], parameter = [2, 4, 6, 8]","expected":"[]"},{"input":"calling = [], parameter = [1, 3, 5, 7]","expected":"[1, 3, 5, 7]"},{"input":"calling = [], parameter = [2, 7, 4, 5, 8, 3]","expected":"[7, 5, 3]"},{"input":"calling = [], parameter = [0, 1, 0, 2, 3]","expected":"[1, 3]"},{"input":"calling = [], parameter = [9]","expected":"[9]"}]},{"id":"exchangeFirst","title":"Problem 9: Exchange Elements Between DArrays","description":"Write the definition of the member function <b>exchangeFirst</b>. The function exchanges the value stored in the first element of the calling object with the value stored in the first element of the parameter object.","parameters":"A DArray object","returnType":"void","assumptions":"Both objects contain at least one element.","tests":[{"input":"calling = [10], parameter = [40]","expected":"calling = [40], parameter = [10]"},{"input":"calling = [10], parameter = [40, 50, 60]","expected":"calling = [40], parameter = [10, 50, 60]"},{"input":"calling = [10, 20, 30], parameter = [40]","expected":"calling = [40, 20, 30], parameter = [10]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [8, 7, 4]","expected":"calling = [8, 2, 5, 3, 9], parameter = [6, 7, 4]"},{"input":"calling = [7, 2, 4], parameter = [7, 8, 9]","expected":"calling = [7, 2, 4], parameter = [7, 8, 9]"}]}];

/* ========================================= */
/* PROBLEM HINTS                             */
/* ========================================= */

const problemHints =
{
    deleteSecond:
    [
        {
            type:
                "Concept",

            text:
                "Deleting an element from an array means the elements after it must shift left to fill the empty position."
        },

        {
            type:
                "Approach",

            text:
                "The second element is at index 1. Starting there, move each following value one position to the left. After the shifting is finished, the logical number of elements must decrease."
        },

        {
            type:
                "Code Structure",

            text:
                "Think about a for loop that starts at index 1. During each iteration, copy a[i + 1] into a[i]. Make sure the loop stops before a[i + 1] would go beyond the last valid element. Then update numOfElements."
        }
    ],


    swapSecondLast:
    [
        {
            type:
                "Concept",

            text:
                "Swapping two array elements means preserving one value temporarily while the other value is moved."
        },

        {
            type:
                "Approach",

            text:
                "The second element is at index 1. The last element is at index numOfElements - 1. Exchange the values stored at those two positions."
        },

        {
            type:
                "Code Structure",

            text:
                "Use one temporary integer. Save the value at index 1, assign the last element into index 1, and then place the saved value into the last position."
        }
    ],


    zeroFirstHalf:
    [
        {
            type:
                "Concept",

            text:
                "You only need to modify the first half of the existing elements. The second half should remain unchanged."
        },

        {
            type:
                "Approach",

            text:
                "Because the problem guarantees an even number of elements, numOfElements / 2 tells you exactly how many positions belong to the first half."
        },

        {
            type:
                "Code Structure",

            text:
                "Use a loop beginning at index 0 and continue only through the first half of the array. During each iteration, assign 0 to the current array element."
        }
    ],


    replaceLast:
    [
        {
            type:
                "Concept",

            text:
                "You do not need a loop because only one existing array element is changing."
        },

        {
            type:
                "Approach",

            text:
                "Remember that array indexing begins at 0, so the last occupied position is one less than the number of elements."
        },

        {
            type:
                "Code Structure",

            text:
                "Use numOfElements to determine the index of the last element, then assign the parameter value directly to that position."
        }
    ],


    search:
    [
        {
            type:
                "Concept",

            text:
                "A search checks elements until the target value is found or there are no more elements left to examine."
        },

        {
            type:
                "Approach",

            text:
                "Use a Boolean variable to remember whether the value has been found. Since the problem asks you to terminate once it is found, your loop should not continue checking unnecessary elements."
        },

        {
            type:
                "Code Structure",

            text:
                "Initialize a Boolean variable to false. Traverse the array while there are still elements to check and the value has not been found. When a match occurs, change the Boolean variable. Return that Boolean result after the loop."
        }
    ],


    insertSecond:
    [
        {
            type:
                "Concept",

            text:
                "Inserting into the middle of an array requires making an empty position first. Existing values must be shifted without being overwritten."
        },

        {
            type:
                "Approach",

            text:
                "The new value belongs at index 1. Shift the existing elements to the right before placing the new value there. Think carefully about which direction the shifting loop should travel."
        },

        {
            type:
                "Code Structure",

            text:
                "When shifting values right, begin near the end of the occupied array and move backward toward index 1. Copy each value into the position to its right. Then place the new value at index 1 and update numOfElements."
        }
    ],


    copyTo:
    [
        {
            type:
                "Concept",

            text:
                "The calling object is the source and the parameter object is the destination. Every existing value in the calling object must be copied."
        },

        {
            type:
                "Approach",

            text:
                "Traverse the calling object's occupied elements and place each value into the corresponding position of the parameter object's array."
        },

        {
            type:
                "Code Structure",

            text:
                "Use a loop over the calling object's numOfElements. Copy a[i] into the matching position of the parameter object. After copying, make sure the parameter object's numOfElements represents the number of elements it now contains."
        }
    ],


    copyOddFrom:
    [
        {
            type:
                "Concept",

            text:
                "Not every value from the parameter object should be copied. You need to test each value and copy only the odd ones."
        },

        {
            type:
                "Approach",

            text:
                "Traverse the parameter object's elements. Use the remainder operator to determine whether each value is odd. Keep track of where the next accepted value belongs in the calling object."
        },

        {
            type:
                "Code Structure",

            text:
                "Loop through the parameter object's occupied elements. When a value is odd, place it at the next available position in the calling object's array and update the calling object's element count."
        }
    ],


    exchangeFirst:
    [
        {
            type:
                "Concept",

            text:
                "You are exchanging one value between two different DArray objects: the calling object and the parameter object."
        },

        {
            type:
                "Approach",

            text:
                "Both first elements are located at index 0. Preserve one object's first value temporarily before replacing it."
        },

        {
            type:
                "Code Structure",

            text:
                "Use one temporary integer to save the calling object's first value. Replace it with the parameter object's first value, then place the saved value into the parameter object's first position."
        }
    ]
};

/* ========================================= */
/* STATE                                     */
/* ========================================= */

const darrayProblems = problems;
const dllProblems = [{"id":"dll_1_deleteFirst","title":"Problem 1: Delete First Node","description":"Write the complete definition of <b>deleteFirst</b> for <b>DoublyList</b>. Delete the first node of the calling object.","parameters":"None","returnType":"void","assumptions":"The list has at least 1 node.","tests":[{"input":"[10]","expected":"[]"},{"input":"[10, 20]","expected":"[20]"},{"input":"[10, 20, 30]","expected":"[20, 30]"},{"input":"[6, 2, 5, 3, 9]","expected":"[2, 5, 3, 9]"},{"input":"[0, 2, 4, 6, 8, 10, 12]","expected":"[2, 4, 6, 8, 10, 12]"}]},{"id":"dll_2_deleteSecond","title":"Problem 2: Delete Second Node","description":"Write the complete definition of <b>deleteSecond</b> for <b>DoublyList</b>. Delete the second node of the calling object.","parameters":"None","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20]","expected":"[10]"},{"input":"[10, 20, 30]","expected":"[10, 30]"},{"input":"[2, 4, 6, 8]","expected":"[2, 6, 8]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 5, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6]","expected":"[1, 3, 4, 5, 6]"}]},{"id":"dll_3_deleteLast","title":"Problem 3: Delete Last Node","description":"Write the complete definition of <b>deleteLast</b> for <b>DoublyList</b>. Delete the last node of the calling object.","parameters":"None","returnType":"void","assumptions":"The list has at least 1 node.","tests":[{"input":"[10]","expected":"[]"},{"input":"[10, 20]","expected":"[10]"},{"input":"[10, 20, 30]","expected":"[10, 20]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 2, 5, 3]"},{"input":"[0, 2, 4, 6, 8, 10, 12]","expected":"[0, 2, 4, 6, 8, 10]"}]},{"id":"dll_4_deleteBeforeLast","title":"Problem 4: Delete Before Last","description":"Write the complete definition of <b>deleteBeforeLast</b> for <b>DoublyList</b>. Delete the node before the last node of the calling object.","parameters":"None","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20]","expected":"[20]"},{"input":"[10, 20, 30]","expected":"[10, 30]"},{"input":"[2, 4, 6, 8]","expected":"[2, 4, 8]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 2, 5, 9]"},{"input":"[1, 2, 3, 4, 5, 6]","expected":"[1, 2, 3, 4, 6]"}]},{"id":"dll_5_deleteMiddle","title":"Problem 5: Delete Middle","description":"Write the complete definition of <b>deleteMiddle</b> for <b>DoublyList</b>. Delete the middle node of the calling object.","parameters":"None","returnType":"void","assumptions":"The list has at least 1 node. The number of nodes is odd.","tests":[{"input":"[10]","expected":"[]"},{"input":"[10, 20, 30]","expected":"[10, 30]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 2, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6, 7]","expected":"[1, 2, 3, 5, 6, 7]"},{"input":"[9, 8, 7, 6, 5, 4, 3, 2, 1]","expected":"[9, 8, 7, 6, 4, 3, 2, 1]"}]},{"id":"dll_6_insertFront","title":"Problem 6: Insert Front","description":"Write the complete definition of <b>insertFront</b> for <b>DoublyList</b>. Insert a new node storing newData at the front.","parameters":"An integer value","returnType":"void","assumptions":"The list may be empty.","tests":[{"input":"[], newData = 15","expected":"[15]"},{"input":"[10], newData = 25","expected":"[25, 10]"},{"input":"[10, 20], newData = 35","expected":"[35, 10, 20]"},{"input":"[2, 4, 6, 8], newData = 0","expected":"[0, 2, 4, 6, 8]"},{"input":"[0, 2, 4, 6, 8], newData = 5","expected":"[5, 0, 2, 4, 6, 8]"}]},{"id":"dll_7_insertBack","title":"Problem 7: Insert Back","description":"Write the complete definition of <b>insertBack</b> for <b>DoublyList</b>. Insert a new node storing newData at the end.","parameters":"An integer value","returnType":"void","assumptions":"The list may be empty.","tests":[{"input":"[], newData = 15","expected":"[15]"},{"input":"[10], newData = 25","expected":"[10, 25]"},{"input":"[10, 20], newData = 35","expected":"[10, 20, 35]"},{"input":"[2, 4, 6, 8], newData = 0","expected":"[2, 4, 6, 8, 0]"},{"input":"[0, 2, 4, 6, 8], newData = 5","expected":"[0, 2, 4, 6, 8, 5]"}]},{"id":"dll_8_insertSecond","title":"Problem 8: Insert Second","description":"Write the complete definition of <b>insertSecond</b> for <b>DoublyList</b>. Insert a new node storing newData between the first and second nodes.","parameters":"An integer value","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20], newData = 15","expected":"[10, 15, 20]"},{"input":"[10, 20, 30], newData = 25","expected":"[10, 25, 20, 30]"},{"input":"[2, 4, 6, 8], newData = 35","expected":"[2, 35, 4, 6, 8]"},{"input":"[6, 2, 5, 3, 9], newData = 0","expected":"[6, 0, 2, 5, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6], newData = 5","expected":"[1, 5, 2, 3, 4, 5, 6]"}]},{"id":"dll_9_insertBeforeLast","title":"Problem 9: Insert Before Last","description":"Write the complete definition of <b>insertBeforeLast</b> for <b>DoublyList</b>. Insert a new node storing newData before the last node.","parameters":"An integer value","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20], newData = 15","expected":"[10, 15, 20]"},{"input":"[10, 20, 30], newData = 25","expected":"[10, 20, 25, 30]"},{"input":"[2, 4, 6, 8], newData = 35","expected":"[2, 4, 6, 35, 8]"},{"input":"[6, 2, 5, 3, 9], newData = 0","expected":"[6, 2, 5, 3, 0, 9]"},{"input":"[1, 2, 3, 4, 5, 6], newData = 5","expected":"[1, 2, 3, 4, 5, 5, 6]"}]},{"id":"dll_10_insertMiddle","title":"Problem 10: Insert Middle","description":"Write the complete definition of <b>insertMiddle</b> for <b>DoublyList</b>. Insert a new node storing newData before the existing middle node.","parameters":"An integer value","returnType":"void","assumptions":"The list has at least 1 node. The number of nodes is odd.","tests":[{"input":"[10], newData = 15","expected":"[15, 10]"},{"input":"[10, 20, 30], newData = 25","expected":"[10, 25, 20, 30]"},{"input":"[6, 2, 5, 3, 9], newData = 35","expected":"[6, 2, 35, 5, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6, 7], newData = 0","expected":"[1, 2, 3, 0, 4, 5, 6, 7]"},{"input":"[9, 8, 7, 6, 5, 4, 3, 2, 1], newData = 5","expected":"[9, 8, 7, 6, 5, 5, 4, 3, 2, 1]"}]},{"id":"dll_11_swapFirstLast","title":"Problem 11: Swap First and Last","description":"Write the complete definition of <b>swapFirstLast</b> for <b>DoublyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"None","returnType":"void","assumptions":"The list has at least 1 node.","tests":[{"input":"[10]","expected":"[10]"},{"input":"[10, 20]","expected":"[20, 10]"},{"input":"[10, 20, 30]","expected":"[30, 20, 10]"},{"input":"[6, 2, 5, 3, 9]","expected":"[9, 2, 5, 3, 6]"},{"input":"[7, 2, 4, 7]","expected":"[7, 2, 4, 7]"}]},{"id":"dll_12_swapFirstSecond","title":"Problem 12: Swap First and Second","description":"Write the complete definition of <b>swapFirstSecond</b> for <b>DoublyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"None","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20]","expected":"[20, 10]"},{"input":"[10, 20, 30]","expected":"[20, 10, 30]"},{"input":"[2, 4, 6, 8]","expected":"[4, 2, 6, 8]"},{"input":"[6, 2, 5, 3, 9]","expected":"[2, 6, 5, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6]","expected":"[2, 1, 3, 4, 5, 6]"}]},{"id":"dll_13_swapFirstBeforeLast","title":"Problem 13: Swap First and Before-Last","description":"Write the complete definition of <b>swapFirstBeforeLast</b> for <b>DoublyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"None","returnType":"void","assumptions":"The list has at least 3 nodes.","tests":[{"input":"[10, 20, 30]","expected":"[20, 10, 30]"},{"input":"[1, 2, 3, 4]","expected":"[3, 2, 1, 4]"},{"input":"[6, 2, 5, 3, 9]","expected":"[3, 2, 5, 6, 9]"},{"input":"[0, 2, 4, 6, 8, 10]","expected":"[8, 2, 4, 6, 0, 10]"},{"input":"[7, 2, 7, 4]","expected":"[7, 2, 7, 4]"}]},{"id":"dll_14_swapFirstMiddle","title":"Problem 14: Swap First and Middle","description":"Write the complete definition of <b>swapFirstMiddle</b> for <b>DoublyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"None","returnType":"void","assumptions":"The list has at least 1 node. The number of nodes is odd.","tests":[{"input":"[10]","expected":"[10]"},{"input":"[10, 20, 30]","expected":"[20, 10, 30]"},{"input":"[6, 2, 5, 3, 9]","expected":"[5, 2, 6, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6, 7]","expected":"[4, 2, 3, 1, 5, 6, 7]"},{"input":"[9, 8, 7, 6, 5, 4, 3, 2, 1]","expected":"[5, 8, 7, 6, 9, 4, 3, 2, 1]"}]},{"id":"dll_15_swapSecondLast","title":"Problem 15: Swap Second and Last","description":"Write the complete definition of <b>swapSecondLast</b> for <b>DoublyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"None","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20]","expected":"[10, 20]"},{"input":"[10, 20, 30]","expected":"[10, 30, 20]"},{"input":"[2, 4, 6, 8]","expected":"[2, 8, 6, 4]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 9, 5, 3, 2]"},{"input":"[1, 2, 3, 4, 5, 6]","expected":"[1, 6, 3, 4, 5, 2]"}]},{"id":"dll_16_swapFirstFirst","title":"Problem 16: Swap First of Calling with First of Parameter","description":"Write the complete definition of <b>swapFirstFirst</b> for <b>DoublyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"A DoublyList object","returnType":"void","assumptions":"The lists are distinct. The calling list has at least one node. The parameter list has at least one node.","tests":[{"input":"calling = [10], parameter = [40]","expected":"calling = [40], parameter = [10]"},{"input":"calling = [10, 20], parameter = [40, 50, 60]","expected":"calling = [40, 20], parameter = [10, 50, 60]"},{"input":"calling = [2, 4, 6], parameter = [90, 80]","expected":"calling = [90, 4, 6], parameter = [2, 80]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [30, 20, 10, 40]","expected":"calling = [30, 2, 5, 3, 9], parameter = [6, 20, 10, 40]"},{"input":"calling = [7, 2, 4], parameter = [7, 7, 1]","expected":"calling = [7, 2, 4], parameter = [7, 7, 1]"}]},{"id":"dll_17_swapFirstLast","title":"Problem 17: Swap First of Calling with Last of Parameter","description":"Write the complete definition of <b>swapFirstLast</b> for <b>DoublyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"A DoublyList object","returnType":"void","assumptions":"The lists are distinct. The calling list has at least one node. The parameter list has at least one node.","tests":[{"input":"calling = [10], parameter = [40]","expected":"calling = [40], parameter = [10]"},{"input":"calling = [10, 20], parameter = [40, 50, 60]","expected":"calling = [60, 20], parameter = [40, 50, 10]"},{"input":"calling = [2, 4, 6], parameter = [90, 80]","expected":"calling = [80, 4, 6], parameter = [90, 2]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [30, 20, 10, 40]","expected":"calling = [40, 2, 5, 3, 9], parameter = [30, 20, 10, 6]"},{"input":"calling = [7, 2, 4], parameter = [7, 7, 1]","expected":"calling = [1, 2, 4], parameter = [7, 7, 7]"}]},{"id":"dll_18_swapFirstSecond","title":"Problem 18: Swap First of Calling with Second of Parameter","description":"Write the complete definition of <b>swapFirstSecond</b> for <b>DoublyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"A DoublyList object","returnType":"void","assumptions":"The lists are distinct. The calling list has at least one node. The parameter list has at least two nodes.","tests":[{"input":"calling = [10], parameter = [40, 50]","expected":"calling = [50], parameter = [40, 10]"},{"input":"calling = [10, 20], parameter = [40, 50, 60]","expected":"calling = [50, 20], parameter = [40, 10, 60]"},{"input":"calling = [2, 4, 6], parameter = [40, 50, 60, 70]","expected":"calling = [50, 4, 6], parameter = [40, 2, 60, 70]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [30, 20, 10, 40, 50]","expected":"calling = [20, 2, 5, 3, 9], parameter = [30, 6, 10, 40, 50]"},{"input":"calling = [7, 2, 4], parameter = [1, 7, 7]","expected":"calling = [7, 2, 4], parameter = [1, 7, 7]"}]},{"id":"dll_19_swapFirstBeforeLast","title":"Problem 19: Swap First of Calling with Before-Last of Parameter","description":"Write the complete definition of <b>swapFirstBeforeLast</b> for <b>DoublyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"A DoublyList object","returnType":"void","assumptions":"The lists are distinct. The calling list has at least one node. The parameter list has at least two nodes.","tests":[{"input":"calling = [10], parameter = [40, 50]","expected":"calling = [40], parameter = [10, 50]"},{"input":"calling = [10, 20], parameter = [40, 50, 60]","expected":"calling = [50, 20], parameter = [40, 10, 60]"},{"input":"calling = [2, 4, 6], parameter = [40, 50, 60, 70]","expected":"calling = [60, 4, 6], parameter = [40, 50, 2, 70]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [30, 20, 10, 40, 50]","expected":"calling = [40, 2, 5, 3, 9], parameter = [30, 20, 10, 6, 50]"},{"input":"calling = [7, 2, 4], parameter = [1, 7, 7]","expected":"calling = [7, 2, 4], parameter = [1, 7, 7]"}]},{"id":"dll_20_swapSecondFirst","title":"Problem 20: Swap Second of Calling with First of Parameter","description":"Write the complete definition of <b>swapSecondFirst</b> for <b>DoublyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"A DoublyList object","returnType":"void","assumptions":"The lists are distinct. The calling list has at least two nodes. The parameter list has at least one node.","tests":[{"input":"calling = [10, 20], parameter = [40]","expected":"calling = [10, 40], parameter = [20]"},{"input":"calling = [10, 20, 30], parameter = [40, 50, 60]","expected":"calling = [10, 40, 30], parameter = [20, 50, 60]"},{"input":"calling = [2, 4, 6, 8], parameter = [90, 80]","expected":"calling = [2, 90, 6, 8], parameter = [4, 80]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [30, 20, 10, 40]","expected":"calling = [6, 30, 5, 3, 9], parameter = [2, 20, 10, 40]"},{"input":"calling = [1, 2, 3, 4, 5, 6], parameter = [7, 7, 1]","expected":"calling = [1, 7, 3, 4, 5, 6], parameter = [2, 7, 1]"}]}];
let currentTopic = "darray";
const sllProblems = [{"id":"sll_1_deleteFirst","title":"Problem 1: Delete First Node","description":"Write the complete definition of <b>deleteFirst</b> for <b>AnyList</b>. Delete the first node of the calling object.","parameters":"None","returnType":"void","assumptions":"The list has at least 1 node.","tests":[{"input":"[10]","expected":"[]"},{"input":"[10, 20]","expected":"[20]"},{"input":"[10, 20, 30]","expected":"[20, 30]"},{"input":"[6, 2, 5, 3, 9]","expected":"[2, 5, 3, 9]"},{"input":"[0, 2, 4, 6, 8, 10, 12]","expected":"[2, 4, 6, 8, 10, 12]"}]},{"id":"sll_2_deleteSecond","title":"Problem 2: Delete Second Node","description":"Write the complete definition of <b>deleteSecond</b> for <b>AnyList</b>. Delete the second node of the calling object.","parameters":"None","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20]","expected":"[10]"},{"input":"[10, 20, 30]","expected":"[10, 30]"},{"input":"[2, 4, 6, 8]","expected":"[2, 6, 8]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 5, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6]","expected":"[1, 3, 4, 5, 6]"}]},{"id":"sll_3_deleteLast","title":"Problem 3: Delete Last Node","description":"Write the complete definition of <b>deleteLast</b> for <b>AnyList</b>. Delete the last node of the calling object.","parameters":"None","returnType":"void","assumptions":"The list has at least 1 node.","tests":[{"input":"[10]","expected":"[]"},{"input":"[10, 20]","expected":"[10]"},{"input":"[10, 20, 30]","expected":"[10, 20]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 2, 5, 3]"},{"input":"[0, 2, 4, 6, 8, 10, 12]","expected":"[0, 2, 4, 6, 8, 10]"}]},{"id":"sll_4_deleteBeforeLast","title":"Problem 4: Delete Before Last","description":"Write the complete definition of <b>deleteBeforeLast</b> for <b>AnyList</b>. Delete the node before the last node of the calling object.","parameters":"None","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20]","expected":"[20]"},{"input":"[10, 20, 30]","expected":"[10, 30]"},{"input":"[2, 4, 6, 8]","expected":"[2, 4, 8]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 2, 5, 9]"},{"input":"[1, 2, 3, 4, 5, 6]","expected":"[1, 2, 3, 4, 6]"}]},{"id":"sll_5_deleteMiddle","title":"Problem 5: Delete Middle","description":"Write the complete definition of <b>deleteMiddle</b> for <b>AnyList</b>. Delete the middle node of the calling object.","parameters":"None","returnType":"void","assumptions":"The list has at least 1 node. The number of nodes is odd.","tests":[{"input":"[10]","expected":"[]"},{"input":"[10, 20, 30]","expected":"[10, 30]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 2, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6, 7]","expected":"[1, 2, 3, 5, 6, 7]"},{"input":"[9, 8, 7, 6, 5, 4, 3, 2, 1]","expected":"[9, 8, 7, 6, 4, 3, 2, 1]"}]},{"id":"sll_6_insertFront","title":"Problem 6: Insert Front","description":"Write the complete definition of <b>insertFront</b> for <b>AnyList</b>. Insert a new node storing newData at the front.","parameters":"An integer value","returnType":"void","assumptions":"The list may be empty.","tests":[{"input":"[], newData = 15","expected":"[15]"},{"input":"[10], newData = 25","expected":"[25, 10]"},{"input":"[10, 20], newData = 35","expected":"[35, 10, 20]"},{"input":"[2, 4, 6, 8], newData = 0","expected":"[0, 2, 4, 6, 8]"},{"input":"[0, 2, 4, 6, 8], newData = 5","expected":"[5, 0, 2, 4, 6, 8]"}]},{"id":"sll_7_insertBack","title":"Problem 7: Insert Back","description":"Write the complete definition of <b>insertBack</b> for <b>AnyList</b>. Insert a new node storing newData at the end.","parameters":"An integer value","returnType":"void","assumptions":"The list may be empty.","tests":[{"input":"[], newData = 15","expected":"[15]"},{"input":"[10], newData = 25","expected":"[10, 25]"},{"input":"[10, 20], newData = 35","expected":"[10, 20, 35]"},{"input":"[2, 4, 6, 8], newData = 0","expected":"[2, 4, 6, 8, 0]"},{"input":"[0, 2, 4, 6, 8], newData = 5","expected":"[0, 2, 4, 6, 8, 5]"}]},{"id":"sll_8_insertSecond","title":"Problem 8: Insert Second","description":"Write the complete definition of <b>insertSecond</b> for <b>AnyList</b>. Insert a new node storing newData between the first and second nodes.","parameters":"An integer value","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20], newData = 15","expected":"[10, 15, 20]"},{"input":"[10, 20, 30], newData = 25","expected":"[10, 25, 20, 30]"},{"input":"[2, 4, 6, 8], newData = 35","expected":"[2, 35, 4, 6, 8]"},{"input":"[6, 2, 5, 3, 9], newData = 0","expected":"[6, 0, 2, 5, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6], newData = 5","expected":"[1, 5, 2, 3, 4, 5, 6]"}]},{"id":"sll_9_insertBeforeLast","title":"Problem 9: Insert Before Last","description":"Write the complete definition of <b>insertBeforeLast</b> for <b>AnyList</b>. Insert a new node storing newData before the last node.","parameters":"An integer value","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20], newData = 15","expected":"[10, 15, 20]"},{"input":"[10, 20, 30], newData = 25","expected":"[10, 20, 25, 30]"},{"input":"[2, 4, 6, 8], newData = 35","expected":"[2, 4, 6, 35, 8]"},{"input":"[6, 2, 5, 3, 9], newData = 0","expected":"[6, 2, 5, 3, 0, 9]"},{"input":"[1, 2, 3, 4, 5, 6], newData = 5","expected":"[1, 2, 3, 4, 5, 5, 6]"}]},{"id":"sll_10_insertMiddle","title":"Problem 10: Insert Middle","description":"Write the complete definition of <b>insertMiddle</b> for <b>AnyList</b>. Insert a new node storing newData before the existing middle node.","parameters":"An integer value","returnType":"void","assumptions":"The list has at least 1 node. The number of nodes is odd.","tests":[{"input":"[10], newData = 15","expected":"[15, 10]"},{"input":"[10, 20, 30], newData = 25","expected":"[10, 25, 20, 30]"},{"input":"[6, 2, 5, 3, 9], newData = 35","expected":"[6, 2, 35, 5, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6, 7], newData = 0","expected":"[1, 2, 3, 0, 4, 5, 6, 7]"},{"input":"[9, 8, 7, 6, 5, 4, 3, 2, 1], newData = 5","expected":"[9, 8, 7, 6, 5, 5, 4, 3, 2, 1]"}]},{"id":"sll_11_swapFirstLast","title":"Problem 11: Swap First and Last","description":"Write the complete definition of <b>swapFirstLast</b> for <b>AnyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"None","returnType":"void","assumptions":"The list has at least 1 node.","tests":[{"input":"[10]","expected":"[10]"},{"input":"[10, 20]","expected":"[20, 10]"},{"input":"[10, 20, 30]","expected":"[30, 20, 10]"},{"input":"[6, 2, 5, 3, 9]","expected":"[9, 2, 5, 3, 6]"},{"input":"[7, 2, 4, 7]","expected":"[7, 2, 4, 7]"}]},{"id":"sll_12_swapFirstSecond","title":"Problem 12: Swap First and Second","description":"Write the complete definition of <b>swapFirstSecond</b> for <b>AnyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"None","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20]","expected":"[20, 10]"},{"input":"[10, 20, 30]","expected":"[20, 10, 30]"},{"input":"[2, 4, 6, 8]","expected":"[4, 2, 6, 8]"},{"input":"[6, 2, 5, 3, 9]","expected":"[2, 6, 5, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6]","expected":"[2, 1, 3, 4, 5, 6]"}]},{"id":"sll_13_swapFirstBeforeLast","title":"Problem 13: Swap First and Before-Last","description":"Write the complete definition of <b>swapFirstBeforeLast</b> for <b>AnyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"None","returnType":"void","assumptions":"The list has at least 3 nodes.","tests":[{"input":"[10, 20, 30]","expected":"[20, 10, 30]"},{"input":"[1, 2, 3, 4]","expected":"[3, 2, 1, 4]"},{"input":"[6, 2, 5, 3, 9]","expected":"[3, 2, 5, 6, 9]"},{"input":"[0, 2, 4, 6, 8, 10]","expected":"[8, 2, 4, 6, 0, 10]"},{"input":"[7, 2, 7, 4]","expected":"[7, 2, 7, 4]"}]},{"id":"sll_14_swapFirstMiddle","title":"Problem 14: Swap First and Middle","description":"Write the complete definition of <b>swapFirstMiddle</b> for <b>AnyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"None","returnType":"void","assumptions":"The list has at least 1 node. The number of nodes is odd.","tests":[{"input":"[10]","expected":"[10]"},{"input":"[10, 20, 30]","expected":"[20, 10, 30]"},{"input":"[6, 2, 5, 3, 9]","expected":"[5, 2, 6, 3, 9]"},{"input":"[1, 2, 3, 4, 5, 6, 7]","expected":"[4, 2, 3, 1, 5, 6, 7]"},{"input":"[9, 8, 7, 6, 5, 4, 3, 2, 1]","expected":"[5, 8, 7, 6, 9, 4, 3, 2, 1]"}]},{"id":"sll_15_swapSecondLast","title":"Problem 15: Swap Second and Last","description":"Write the complete definition of <b>swapSecondLast</b> for <b>AnyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"None","returnType":"void","assumptions":"The list has at least 2 nodes.","tests":[{"input":"[10, 20]","expected":"[10, 20]"},{"input":"[10, 20, 30]","expected":"[10, 30, 20]"},{"input":"[2, 4, 6, 8]","expected":"[2, 8, 6, 4]"},{"input":"[6, 2, 5, 3, 9]","expected":"[6, 9, 5, 3, 2]"},{"input":"[1, 2, 3, 4, 5, 6]","expected":"[1, 6, 3, 4, 5, 2]"}]},{"id":"sll_16_swapFirstFirst","title":"Problem 16: Swap First of Calling with First of Parameter","description":"Write the complete definition of <b>swapFirstFirst</b> for <b>AnyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"A AnyList object","returnType":"void","assumptions":"The lists are distinct. The calling list has at least one node. The parameter list has at least one node.","tests":[{"input":"calling = [10], parameter = [40]","expected":"calling = [40], parameter = [10]"},{"input":"calling = [10, 20], parameter = [40, 50, 60]","expected":"calling = [40, 20], parameter = [10, 50, 60]"},{"input":"calling = [2, 4, 6], parameter = [90, 80]","expected":"calling = [90, 4, 6], parameter = [2, 80]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [30, 20, 10, 40]","expected":"calling = [30, 2, 5, 3, 9], parameter = [6, 20, 10, 40]"},{"input":"calling = [7, 2, 4], parameter = [7, 7, 1]","expected":"calling = [7, 2, 4], parameter = [7, 7, 1]"}]},{"id":"sll_17_swapFirstLast","title":"Problem 17: Swap First of Calling with Last of Parameter","description":"Write the complete definition of <b>swapFirstLast</b> for <b>AnyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"A AnyList object","returnType":"void","assumptions":"The lists are distinct. The calling list has at least one node. The parameter list has at least one node.","tests":[{"input":"calling = [10], parameter = [40]","expected":"calling = [40], parameter = [10]"},{"input":"calling = [10, 20], parameter = [40, 50, 60]","expected":"calling = [60, 20], parameter = [40, 50, 10]"},{"input":"calling = [2, 4, 6], parameter = [90, 80]","expected":"calling = [80, 4, 6], parameter = [90, 2]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [30, 20, 10, 40]","expected":"calling = [40, 2, 5, 3, 9], parameter = [30, 20, 10, 6]"},{"input":"calling = [7, 2, 4], parameter = [7, 7, 1]","expected":"calling = [1, 2, 4], parameter = [7, 7, 7]"}]},{"id":"sll_18_swapFirstSecond","title":"Problem 18: Swap First of Calling with Second of Parameter","description":"Write the complete definition of <b>swapFirstSecond</b> for <b>AnyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"A AnyList object","returnType":"void","assumptions":"The lists are distinct. The calling list has at least one node. The parameter list has at least two nodes.","tests":[{"input":"calling = [10], parameter = [40, 50]","expected":"calling = [50], parameter = [40, 10]"},{"input":"calling = [10, 20], parameter = [40, 50, 60]","expected":"calling = [50, 20], parameter = [40, 10, 60]"},{"input":"calling = [2, 4, 6], parameter = [40, 50, 60, 70]","expected":"calling = [50, 4, 6], parameter = [40, 2, 60, 70]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [30, 20, 10, 40, 50]","expected":"calling = [20, 2, 5, 3, 9], parameter = [30, 6, 10, 40, 50]"},{"input":"calling = [7, 2, 4], parameter = [1, 7, 7]","expected":"calling = [7, 2, 4], parameter = [1, 7, 7]"}]},{"id":"sll_19_swapFirstBeforeLast","title":"Problem 19: Swap First of Calling with Before-Last of Parameter","description":"Write the complete definition of <b>swapFirstBeforeLast</b> for <b>AnyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"A AnyList object","returnType":"void","assumptions":"The lists are distinct. The calling list has at least one node. The parameter list has at least two nodes.","tests":[{"input":"calling = [10], parameter = [40, 50]","expected":"calling = [40], parameter = [10, 50]"},{"input":"calling = [10, 20], parameter = [40, 50, 60]","expected":"calling = [50, 20], parameter = [40, 10, 60]"},{"input":"calling = [2, 4, 6], parameter = [40, 50, 60, 70]","expected":"calling = [60, 4, 6], parameter = [40, 50, 2, 70]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [30, 20, 10, 40, 50]","expected":"calling = [40, 2, 5, 3, 9], parameter = [30, 20, 10, 6, 50]"},{"input":"calling = [7, 2, 4], parameter = [1, 7, 7]","expected":"calling = [7, 2, 4], parameter = [1, 7, 7]"}]},{"id":"sll_20_swapSecondFirst","title":"Problem 20: Swap Second of Calling with First of Parameter","description":"Write the complete definition of <b>swapSecondFirst</b> for <b>AnyList</b>. Exchange the node data values described in the title. Keep the nodes and links in place.","parameters":"A AnyList object","returnType":"void","assumptions":"The lists are distinct. The calling list has at least two nodes. The parameter list has at least one node.","tests":[{"input":"calling = [10, 20], parameter = [40]","expected":"calling = [10, 40], parameter = [20]"},{"input":"calling = [10, 20, 30], parameter = [40, 50, 60]","expected":"calling = [10, 40, 30], parameter = [20, 50, 60]"},{"input":"calling = [2, 4, 6, 8], parameter = [90, 80]","expected":"calling = [2, 90, 6, 8], parameter = [4, 80]"},{"input":"calling = [6, 2, 5, 3, 9], parameter = [30, 20, 10, 40]","expected":"calling = [6, 30, 5, 3, 9], parameter = [2, 20, 10, 40]"},{"input":"calling = [1, 2, 3, 4, 5, 6], parameter = [7, 7, 1]","expected":"calling = [1, 7, 3, 4, 5, 6], parameter = [2, 7, 1]"}]}];
const sllReference = "#ifndef ANYLIST_H\n#define ANYLIST_H\n\n#include <iostream>\n\nclass Node\n{\npublic:\n    Node() : data(0), next(nullptr) {}\n    Node(int theData, Node* newNext)\n        : data(theData), next(newNext) {}\n\n    Node* getNext() const { return next; }\n    int getData() const { return data; }\n    void setData(int theData) { data = theData; }\n    void setNext(Node* newNext) { next = newNext; }\n    ~Node() {}\n\nprivate:\n    int data;\n    Node* next;\n};\n\nclass AnyList\n{\npublic:\n    AnyList() : first(nullptr), count(0) {}\n\n    void insertFront(int);\n    void print() const;\n    void clearList();\n    ~AnyList();\n\nprivate:\n    Node* first;\n    int count;\n};\n\n#endif";
Object.assign(problemHints, {"sll_1_deleteFirst":[{"type":"Concept","text":"A singly linked list only points forward. Removing a node requires reconnecting the node before it, except when removing first."},{"type":"Approach","text":"Traverse from first to the requested position, keeping track of the preceding node. Think about the smallest allowed list."},{"type":"Code Structure","text":"Save the next link, update the preceding node or first, delete the removed node, and decrease count once."}],"sll_2_deleteSecond":[{"type":"Concept","text":"A singly linked list only points forward. Removing a node requires reconnecting the node before it, except when removing first."},{"type":"Approach","text":"Traverse from first to the requested position, keeping track of the preceding node. Think about the smallest allowed list."},{"type":"Code Structure","text":"Save the next link, update the preceding node or first, delete the removed node, and decrease count once."}],"sll_3_deleteLast":[{"type":"Concept","text":"A singly linked list only points forward. Removing a node requires reconnecting the node before it, except when removing first."},{"type":"Approach","text":"Traverse from first to the requested position, keeping track of the preceding node. Think about the smallest allowed list."},{"type":"Code Structure","text":"Save the next link, update the preceding node or first, delete the removed node, and decrease count once."}],"sll_4_deleteBeforeLast":[{"type":"Concept","text":"A singly linked list only points forward. Removing a node requires reconnecting the node before it, except when removing first."},{"type":"Approach","text":"Traverse from first to the requested position, keeping track of the preceding node. Think about the smallest allowed list."},{"type":"Code Structure","text":"Save the next link, update the preceding node or first, delete the removed node, and decrease count once."}],"sll_5_deleteMiddle":[{"type":"Concept","text":"A singly linked list only points forward. Removing a node requires reconnecting the node before it, except when removing first."},{"type":"Approach","text":"Traverse from first to the requested position, keeping track of the preceding node. Think about the smallest allowed list."},{"type":"Code Structure","text":"Save the next link, update the preceding node or first, delete the removed node, and decrease count once."}],"sll_6_insertFront":[{"type":"Concept","text":"Insert one node while preserving the existing nodes and their order."},{"type":"Approach","text":"Traverse forward to the insertion position, retaining its preceding node when one exists."},{"type":"Code Structure","text":"Create a Node that points to the following node. Connect the preceding node to it, or update first. Increase count once."}],"sll_7_insertBack":[{"type":"Concept","text":"Insert one node while preserving the existing nodes and their order."},{"type":"Approach","text":"Traverse forward to the insertion position, retaining its preceding node when one exists."},{"type":"Code Structure","text":"Create a Node that points to the following node. Connect the preceding node to it, or update first. Increase count once."}],"sll_8_insertSecond":[{"type":"Concept","text":"Insert one node while preserving the existing nodes and their order."},{"type":"Approach","text":"Traverse forward to the insertion position, retaining its preceding node when one exists."},{"type":"Code Structure","text":"Create a Node that points to the following node. Connect the preceding node to it, or update first. Increase count once."}],"sll_9_insertBeforeLast":[{"type":"Concept","text":"Insert one node while preserving the existing nodes and their order."},{"type":"Approach","text":"Traverse forward to the insertion position, retaining its preceding node when one exists."},{"type":"Code Structure","text":"Create a Node that points to the following node. Connect the preceding node to it, or update first. Increase count once."}],"sll_10_insertMiddle":[{"type":"Concept","text":"Insert one node while preserving the existing nodes and their order."},{"type":"Approach","text":"Locate the existing middle and the node before it. Insert the new value before the middle."},{"type":"Code Structure","text":"Create a Node that points to the following node. Connect the preceding node to it, or update first. Increase count once."}],"sll_11_swapFirstLast":[{"type":"Concept","text":"Exchange data values without replacing nodes or changing links."},{"type":"Approach","text":"Find both specified nodes by walking forward from first."},{"type":"Code Structure","text":"Use getData(), setData(), and a temporary integer. Leave count and every next link unchanged."}],"sll_12_swapFirstSecond":[{"type":"Concept","text":"Exchange data values without replacing nodes or changing links."},{"type":"Approach","text":"Find both specified nodes by walking forward from first."},{"type":"Code Structure","text":"Use getData(), setData(), and a temporary integer. Leave count and every next link unchanged."}],"sll_13_swapFirstBeforeLast":[{"type":"Concept","text":"Exchange data values without replacing nodes or changing links."},{"type":"Approach","text":"Find both specified nodes by walking forward from first."},{"type":"Code Structure","text":"Use getData(), setData(), and a temporary integer. Leave count and every next link unchanged."}],"sll_14_swapFirstMiddle":[{"type":"Concept","text":"Exchange data values without replacing nodes or changing links."},{"type":"Approach","text":"Find both specified nodes by walking forward from first."},{"type":"Code Structure","text":"Use getData(), setData(), and a temporary integer. Leave count and every next link unchanged."}],"sll_15_swapSecondLast":[{"type":"Concept","text":"Exchange data values without replacing nodes or changing links."},{"type":"Approach","text":"Find both specified nodes by walking forward from first."},{"type":"Code Structure","text":"Use getData(), setData(), and a temporary integer. Leave count and every next link unchanged."}],"sll_16_swapFirstFirst":[{"type":"Concept","text":"Exchange data values without replacing nodes or changing links."},{"type":"Approach","text":"Locate the specified node in each list by traversing from each first pointer."},{"type":"Code Structure","text":"Use getData(), setData(), and a temporary integer. Leave count and every next link unchanged."}],"sll_17_swapFirstLast":[{"type":"Concept","text":"Exchange data values without replacing nodes or changing links."},{"type":"Approach","text":"Locate the specified node in each list by traversing from each first pointer."},{"type":"Code Structure","text":"Use getData(), setData(), and a temporary integer. Leave count and every next link unchanged."}],"sll_18_swapFirstSecond":[{"type":"Concept","text":"Exchange data values without replacing nodes or changing links."},{"type":"Approach","text":"Locate the specified node in each list by traversing from each first pointer."},{"type":"Code Structure","text":"Use getData(), setData(), and a temporary integer. Leave count and every next link unchanged."}],"sll_19_swapFirstBeforeLast":[{"type":"Concept","text":"Exchange data values without replacing nodes or changing links."},{"type":"Approach","text":"Locate the specified node in each list by traversing from each first pointer."},{"type":"Code Structure","text":"Use getData(), setData(), and a temporary integer. Leave count and every next link unchanged."}],"sll_20_swapSecondFirst":[{"type":"Concept","text":"Exchange data values without replacing nodes or changing links."},{"type":"Approach","text":"Locate the specified node in each list by traversing from each first pointer."},{"type":"Code Structure","text":"Use getData(), setData(), and a temporary integer. Leave count and every next link unchanged."}]});
const topicList = topic => topic === "sll" ? sllProblems : topic === "dll" ? dllProblems : darrayProblems;
const topicLabel = topic => topic === "sll" ? "Singly Linked List" : topic === "dll" ? "Doubly Linked List" : "DArray";
const topicStates = {};
let currentProblem = 0;

let testsRunning = false;

let savedCode = {};

let savedResults = {};

let attemptedProblems = {};

let completedProblems = {};

let savedHintLevels = {};

let openedHints = {};



/* ========================================= */
/* PAGE ELEMENTS                             */
/* ========================================= */

const title =
    document.getElementById(
        "problem-title"
    );

const showHintButton =
    document.getElementById(
        "show-hint"
    );


const hintCard =
    document.getElementById(
        "hint-card"
    );


const hintLevel =
    document.getElementById(
        "hint-level"
    );


const hintType =
    document.getElementById(
        "hint-type"
    );


const hintText =
    document.getElementById(
        "hint-text"
    );


const nextHintButton =
    document.getElementById(
        "next-hint"
    );


const hideHintButton =
    document.getElementById(
        "hide-hint"
    );


const description =
    document.getElementById(
        "problem-description"
    );


const parameters =
    document.getElementById(
        "parameters"
    );


const returnType =
    document.getElementById(
        "return-type"
    );


const assumptions =
    document.getElementById(
        "assumptions"
    );


const results =
    document.getElementById(
        "results"
    );


const previousButton =
    document.getElementById(
        "previous"
    );


const nextButton =
    document.getElementById(
        "next"
    );


const runButton =
    document.getElementById(
        "run"
    );


const resetButton =
    document.getElementById(
        "reset"
    );


const problemNumber =
    document.getElementById(
        "problem-number"
    );


const problemProgress =
    document.getElementById(
        "problem-progress"
    );


const progressCount =
    document.getElementById(
        "progress-count"
    );


const passedCount =
    document.getElementById(
        "passed-count"
    );


const totalCount =
    document.getElementById(
        "total-count"
    );


const testProgressBar =
    document.getElementById(
        "test-progress-bar"
    );


const testIndicators =
    document.getElementById(
        "test-indicators"
    );


const codingPanel =
    document.getElementById(
        "coding-panel"
    );


const editorSection =
    document.getElementById(
        "editor-section"
    );


const resultsPanel =
    document.getElementById(
        "results-panel"
    );


const panelResizer =
    document.getElementById(
        "panel-resizer"
    );



/* ========================================= */
/* CODEMIRROR                                */
/* ========================================= */

const codeTextArea =
    document.getElementById(
        "code"
    );


const editor =
    window.CodeMirror ? CodeMirror.fromTextArea(
        codeTextArea,

        {
            mode:
                "text/x-c++src",

            theme:
                "material-darker",

            lineNumbers:
                true,

            indentUnit:
                4,

            tabSize:
                4,

            indentWithTabs:
                false,

            smartIndent:
                true,

            electricChars:
                true,

            autoCloseBrackets:
                true,

            matchBrackets:
                true,

            styleActiveLine:
                true,

            lineWrapping:
                false,

            autofocus:
                true,

            extraKeys:
            {
                Tab:
                    function(cm)
                    {
                        if (
                            cm.somethingSelected()
                        )
                        {
                            cm.indentSelection(
                                "add"
                            );
                        }

                        else
                        {
                            cm.replaceSelection(
                                "    ",
                                "end"
                            );
                        }
                    },


                "Shift-Tab":
                    function(cm)
                    {
                        cm.indentSelection(
                            "subtract"
                        );
                    },


                "Ctrl-Enter":
                    function()
                    {
                        runTests();
                    },


                "Cmd-Enter":
                    function()
                    {
                        runTests();
                    }
            }
        }
    ) : {
        getValue: () => codeTextArea.value,
        setValue: value => { codeTextArea.value = value; },
        refresh: () => {},
        focus: () => codeTextArea.focus()
    };

codeTextArea.setAttribute('aria-label', 'C++ solution');
codeTextArea.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        runTests();
    }
    if (event.key === 'Tab') {
        event.preventDefault();
        codeTextArea.setRangeText('    ', codeTextArea.selectionStart, codeTextArea.selectionEnd, 'end');
    }
});

function starterCode() {
    return "";
}

/* ========================================= */
/* WAIT                                      */
/* ========================================= */

function wait(
    milliseconds
)
{
    return new Promise(
        resolve =>
        {
            setTimeout(
                resolve,
                milliseconds
            );
        }
    );
}



/* ========================================= */
/* SAVE CURRENT CODE                         */
/* ========================================= */

function saveCurrentCode()
{
    savedCode[currentProblem] =
        editor.getValue();
}



/* ========================================= */
/* LOCK / UNLOCK CONTROLS                    */
/* ========================================= */

function updateControls()
{
    previousButton.disabled =
        testsRunning ||
        currentProblem === 0;


    nextButton.disabled =
        testsRunning ||
        currentProblem ===
            problems.length - 1;


    resetButton.disabled =
        testsRunning;


    const problemButtons =
        problemProgress.querySelectorAll(
            ".problem-step"
        );


    problemButtons.forEach(
        button =>
        {
            button.disabled =
                testsRunning;
        }
    );
}



/* ========================================= */
/* PROBLEM PROGRESS                          */
/* ========================================= */

function renderProblemProgress()
{
    problemProgress.classList.toggle("dll-progress", currentTopic === "dll" || currentTopic === "sll");
    problemProgress.innerHTML =
        "";


    let completedCount =
        0;


    for (
        let i = 0;
        i < problems.length;
        ++i
    )
    {
        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "problem-step";


        /*
            A problem can have one of three states:

            1. Not attempted
            2. Attempted
            3. Completed
        */
        if (
            completedProblems[i]
        )
        {
            button.classList.add(
                "completed"
            );


            button.textContent =
                "✓";


            button.setAttribute(
                "aria-label",
                `Problem ${i + 1}, completed`
            );


            ++completedCount;
        }

        else if (
            attemptedProblems[i]
        )
        {
            button.classList.add(
                "attempted"
            );


            button.textContent =
                i + 1;


            button.setAttribute(
                "aria-label",
                `Problem ${i + 1}, attempted`
            );
        }

        else
        {
            button.textContent =
                i + 1;


            button.setAttribute(
                "aria-label",
                `Problem ${i + 1}, not attempted`
            );
        }


        /*
            The current problem gets its own state
            in addition to attempted/completed.
        */
        if (
            i === currentProblem
        )
        {
            button.classList.add(
                "current"
            );
        }


        button.title =
            completedProblems[i]
                ? `Problem ${i + 1} — Completed`
                : attemptedProblems[i]
                    ? `Problem ${i + 1} — Attempted`
                    : `Problem ${i + 1} — Not attempted`;


        button.disabled =
            testsRunning;


        button.addEventListener(
            "click",

            () =>
            {
                if (
                    testsRunning ||
                    i === currentProblem
                )
                {
                    return;
                }


                saveCurrentCode();


                currentProblem =
                    i;


                loadProblem();
            }
        );


        problemProgress.appendChild(
            button
        );
    }


    progressCount.textContent =
        `${completedCount} / ${problems.length} completed`;


    updateControls();
}



/* ========================================= */
/* TEST INDICATORS                           */
/* ========================================= */

function createTestIndicators(
    numberOfTests
)
{
    testIndicators.innerHTML =
        "";


    for (
        let i = 0;
        i < numberOfTests;
        ++i
    )
    {
        const dot =
            document.createElement(
                "div"
            );


        dot.className =
            "test-dot";


        dot.textContent =
            i + 1;


        testIndicators.appendChild(
            dot
        );
    }
}



/* ========================================= */
/* EMPTY RESULTS                             */
/* ========================================= */

function resetResultsDisplay()
{
    const problem =
        problems[currentProblem];


    passedCount.textContent =
        "0";


    totalCount.textContent =
        problem.tests.length;


    testProgressBar.style.width =
        "0%";


    createTestIndicators(
        problem.tests.length
    );


    results.classList.remove(
        "running-results"
    );


    results.innerHTML =
        `
            <div class="empty-results">

                <div class="empty-results-icon">
                    &lt;/&gt;
                </div>

                <strong>
                    No tests have been run yet.
                </strong>

                <p>
                    Write your solution and run the tests.
                </p>

            </div>
        `;
}



/* ========================================= */
/* SAVE RESULT DISPLAY                       */
/* ========================================= */

function saveResultState()
{
    const dots =
        Array.from(
            testIndicators.children
        );


    savedResults[currentProblem] =
    {
        html:
            results.innerHTML,

        passed:
            passedCount.textContent,

        total:
            totalCount.textContent,

        progress:
            testProgressBar.style.width,

        indicators:
            dots.map(
                dot =>
                ({
                    className:
                        dot.className,

                    text:
                        dot.textContent
                })
            )
    };
}



/* ========================================= */
/* RESTORE RESULT DISPLAY                    */
/* ========================================= */

function restoreResultState(
    state
)
{
    results.classList.remove(
        "running-results"
    );


    results.innerHTML =
        state.html;


    passedCount.textContent =
        state.passed;


    totalCount.textContent =
        state.total;


    testProgressBar.style.width =
        state.progress;


    testIndicators.innerHTML =
        "";


    for (
        const indicator
        of state.indicators
    )
    {
        const dot =
            document.createElement(
                "div"
            );


        dot.className =
            indicator.className;


        dot.textContent =
            indicator.text;


        testIndicators.appendChild(
            dot
        );
    }
}

/* ========================================= */
/* HINT SYSTEM                               */
/* ========================================= */

function renderHint()
{
    const problem =
        problems[currentProblem];


    const hints =
        problemHints[
            problem.id
        ];


    let currentHint =
        savedHintLevels[
            currentProblem
        ];


    if (
        currentHint === undefined
    )
    {
        currentHint =
            0;


        savedHintLevels[
            currentProblem
        ] =
            0;
    }


    const hint =
        hints[currentHint];


    hintLevel.textContent =
        `Hint ${currentHint + 1} of ${hints.length}`;


    hintType.textContent =
        hint.type;


    hintText.textContent =
        hint.text;


    if (
        currentHint ===
        hints.length - 1
    )
    {
        nextHintButton.textContent =
            "No More Hints";


        nextHintButton.disabled =
            true;
    }

    else
    {
        nextHintButton.textContent =
            "Next Hint →";


        nextHintButton.disabled =
            false;
    }
}



function restoreHintState()
{
    if (
        openedHints[
            currentProblem
        ]
    )
    {
        hintCard.hidden =
            false;


        showHintButton.hidden =
            true;


        renderHint();
    }

    else
    {
        hintCard.hidden =
            true;


        showHintButton.hidden =
            false;
    }
}



/* ========================================= */
/* SHOW HINT                                 */
/* ========================================= */

showHintButton.addEventListener(
    "click",

    () =>
    {
        openedHints[
            currentProblem
        ] =
            true;


        if (
            savedHintLevels[
                currentProblem
            ] === undefined
        )
        {
            savedHintLevels[
                currentProblem
            ] =
                0;
        }


        hintCard.hidden =
            false;


        showHintButton.hidden =
            true;


        renderHint();


        hintCard.classList.remove(
            "hint-enter"
        );


        void hintCard.offsetWidth;


        hintCard.classList.add(
            "hint-enter"
        );
    }
);



/* ========================================= */
/* NEXT HINT                                 */
/* ========================================= */

nextHintButton.addEventListener(
    "click",

    () =>
    {
        const hints =
            problemHints[
                problems[
                    currentProblem
                ].id
            ];


        const currentHint =
            savedHintLevels[
                currentProblem
            ];


        if (
            currentHint <
            hints.length - 1
        )
        {
            savedHintLevels[
                currentProblem
            ] =
                currentHint + 1;


            renderHint();


            hintText.classList.remove(
                "hint-text-change"
            );


            void hintText.offsetWidth;


            hintText.classList.add(
                "hint-text-change"
            );
        }
    }
);



/* ========================================= */
/* HIDE HINT                                 */
/* ========================================= */

hideHintButton.addEventListener(
    "click",

    () =>
    {
        openedHints[
            currentProblem
        ] =
            false;


        hintCard.hidden =
            true;


        showHintButton.hidden =
            false;
    }
);


/* ========================================= */
/* LOAD PROBLEM                              */
/* ========================================= */

function loadProblem()
{
    document.body.classList.remove(
        "problem-changing"
    );


    void document.body.offsetWidth;


    document.body.classList.add(
        "problem-changing"
    );


    setTimeout(
        () =>
        {
            document.body.classList.remove(
                "problem-changing"
            );
        },

        350
    );


    const problem =
        problems[currentProblem];


    title.innerHTML =
        problem.title;


    description.innerHTML =
        problem.description;


    parameters.textContent =
        problem.parameters;


    returnType.textContent =
        problem.returnType;


    assumptions.textContent =
        problem.assumptions;


    if (
        savedCode[currentProblem] !==
        undefined
    )
    {
        editor.setValue(
            savedCode[currentProblem]
        );
    }

    else
    {
        editor.setValue(starterCode());
    }


    problemNumber.textContent =
        `Problem ${currentProblem + 1} of ${problems.length}`;

    restoreHintState();

    renderProblemProgress();


    if (
        savedResults[currentProblem] !==
        undefined
    )
    {
        restoreResultState(
            savedResults[currentProblem]
        );
    }

    else
    {
        resetResultsDisplay();
    }


    updateControls();


    editor.refresh();


    editor.focus();
}



/* ========================================= */
/* PREVIOUS                                  */
/* ========================================= */

previousButton.addEventListener(
    "click",

    () =>
    {
        if (
            testsRunning
        )
        {
            return;
        }


        saveCurrentCode();


        if (
            currentProblem > 0
        )
        {
            --currentProblem;

            loadProblem();
        }
    }
);



/* ========================================= */
/* NEXT                                      */
/* ========================================= */

nextButton.addEventListener(
    "click",

    () =>
    {
        if (
            testsRunning
        )
        {
            return;
        }


        saveCurrentCode();


        if (
            currentProblem <
            problems.length - 1
        )
        {
            ++currentProblem;

            loadProblem();
        }
    }
);



/* ========================================= */
/* RESET                                     */
/* ========================================= */

resetButton.addEventListener(
    "click",

    () =>
    {
        if (
            testsRunning
        )
        {
            return;
        }


        editor.setValue(starterCode());


        savedCode[currentProblem] =
            "";


        delete savedResults[
            currentProblem
        ];


        delete attemptedProblems[
            currentProblem
        ];


        delete completedProblems[
            currentProblem
        ];


        resetResultsDisplay();


        renderProblemProgress();


        editor.focus();
    }
);



/* ========================================= */
/* RUN BUTTON                                */
/* ========================================= */

runButton.addEventListener(
    "click",
    runTests
);



/* ========================================= */
/* RUN TESTS                                 */
/* ========================================= */

async function runTests()
{
    if (
        testsRunning
    )
    {
        return;
    }


    const problem =
        problems[currentProblem];


    const testedProblem =
        currentProblem;



    saveCurrentCode();


    attemptedProblems[
        currentProblem
    ] =
        true;


    testsRunning =
        true;
    topicInputs.forEach(input => input.disabled = true);


    renderProblemProgress();


    runButton.disabled =
        true;


    runButton.classList.add(
        "running"
    );


    runButton.querySelector(
        ".run-text"
    ).textContent =
        "Running...";


    updateControls();


    passedCount.textContent =
        "0";


    totalCount.textContent =
        problem.tests.length;


    testProgressBar.style.width =
        "0%";


    createTestIndicators(
        problem.tests.length
    );


    updateControls();


    results.classList.add(
        "running-results"
    );


    results.innerHTML =
        `
            <div class="empty-results">

                <div class="empty-results-icon">
                    &lt;/&gt;
                </div>

                <strong>
                    Running tests...
                </strong>

                <p>
                    Compiling and checking your solution.
                </p>

            </div>
        `;


    try
    {
        const response =
            await fetch(
                "/run",

                {
                    method:
                        "POST",

                    headers:
                    {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            {
                                problem:
                                    problem.id,

                                code:
                                    editor.getValue()
                            }
                        )
                }
            );


        const data =
            await response.json();


        if (
            testedProblem !==
            currentProblem
        )
        {
            return;
        }


        if (
            !data.success
        )
        {
            if (data.errorType === 'service_unavailable') showGradingUnavailable();
            else showCompileError(data.error);

            return;
        }


        await gradeOutput(
            data.output,
            problem
        );
    }

    catch (error)
    {
        if (
            testedProblem ===
            currentProblem
        )
        {
            showServerError(
                error
            );
        }
    }

    finally
    {
        testsRunning =
            false;
        topicInputs.forEach(input => input.disabled = false);


        runButton.disabled =
            false;


        runButton.classList.remove(
            "running"
        );


        runButton.querySelector(
            ".run-text"
        ).textContent =
            "Run Tests";


        updateControls();
    }
}



/* ========================================= */
/* COMPILER ERROR INFORMATION                */
/* ========================================= */

function getCompilerErrorInfo(
    error
)
{
    const text =
        String(error);


    const lines =
        text.split(/\r?\n/);


    let mainMessage =
        "The compiler found an error in your code.";


    let lineNumber =
        "";


    /*
        Look for the first real G++ error message.

        A typical message looks like:

        submission.cpp:5:10: error: expected ';' before '}'
    */
    for (
        const line of lines
    )
    {
        if (
            line.includes(
                "error:"
            )
        )
        {
            const errorIndex =
                line.indexOf(
                    "error:"
                );


            mainMessage =
                line
                    .substring(
                        errorIndex + 6
                    )
                    .trim();


            const locationMatch =
                line.match(
                    /submission\.cpp:(\d+):\d+:\s*error:/
                );


                if (
                        locationMatch !== null
                    )
                    {
                        const compilerLine =
                            Number(
                                locationMatch[1]
                            );


                        const editorLine = compilerLine;


                        if (
                            editorLine > 0
                        )
                        {
                            lineNumber =
                                editorLine;
                        }
                    }


            break;
        }
    }


    let tip =
        "Read the compiler message carefully and check the code near the reported location.";


    const lowerMessage =
        mainMessage.toLowerCase();


    /*
        Give a short learning hint for several common
        beginner C++ compilation errors.
    */
    if (
        lowerMessage.includes(
            "expected ';'"
        ) ||
        lowerMessage.includes(
            "expected ‘;’"
        ) ||
        lowerMessage.includes(
            "expected ';' before"
        )
    )
    {
        tip =
            "Check the statement immediately before this location. You may be missing a semicolon (;).";
    }

    else if (
        lowerMessage.includes(
            "was not declared"
        ) ||
        lowerMessage.includes(
            "not declared in this scope"
        )
    )
    {
        tip =
            "Check the spelling of the identifier and make sure it was declared before you use it.";
    }

    else if (
        lowerMessage.includes(
            "expected '}'"
        ) ||
        lowerMessage.includes(
            "expected ‘}’"
        )
    )
    {
        tip =
            "Check your curly braces. An opening { may be missing its matching closing }.";
    }

    else if (
        lowerMessage.includes(
            "expected ')'"
        ) ||
        lowerMessage.includes(
            "expected ‘)’"
        )
    )
    {
        tip =
            "Check your parentheses. An opening ( may be missing its matching closing ).";
    }

    else if (
        lowerMessage.includes(
            "no matching function"
        )
    )
    {
        tip =
            "Check the function name, number of arguments, and argument types.";
    }

    else if (
        lowerMessage.includes(
            "cannot convert"
        ) ||
        lowerMessage.includes(
            "invalid conversion"
        )
    )
    {
        tip =
            "The compiler found incompatible types. Check the type of the value you are assigning or passing.";
    }

    else if (
        lowerMessage.includes(
            "expected primary-expression"
        )
    )
    {
        tip =
            "Check the expression near this location for a missing value, operator, parenthesis, or other syntax problem.";
    }

    else if (
        lowerMessage.includes(
            "redefinition"
        )
    )
    {
        tip =
            "Something with this name has already been defined. Check for a duplicate variable or function definition.";
    }


    return {
        message:
            mainMessage,

        line:
            lineNumber,

        tip:
            tip
    };
}



/* ========================================= */
/* MARK TESTS AS NOT RUN                     */
/* ========================================= */

function markTestsNotRun()
{
    const dots =
        testIndicators.children;


    for (
        let i = 0;
        i < dots.length;
        ++i
    )
    {
        dots[i].classList.remove(
            "pass",
            "fail"
        );


        dots[i].classList.add(
            "not-run"
        );


        dots[i].textContent =
            "—";
    }
}



/* ========================================= */
/* COMPILE ERROR                             */
/* ========================================= */

function showCompileError(
    error
)
{
    results.classList.remove(
        "running-results"
    );


    passedCount.textContent =
        "0";


    testProgressBar.style.width =
        "0%";


    markTestsNotRun();


    delete completedProblems[
        currentProblem
    ];

    attemptedProblems[
    currentProblem
    ] =
        true;


    const errorInfo =
        getCompilerErrorInfo(
            error
        );


    let locationHTML =
        "";


    if (
        errorInfo.line !== ""
    )
    {
        locationHTML =
            `
                <span class="error-line-badge">
                    Line ${escapeHTML(
                        errorInfo.line
                    )}
                </span>
            `;
    }


    results.innerHTML =
        `
            <div class="error-card compile-error-card">

                <div class="error-card-heading">

                    <div class="error-icon">
                        !
                    </div>

                    <div>

                        <div class="error-title">
                            Compilation Error
                        </div>

                        <div class="error-subtitle">
                            Your solution could not be compiled.
                        </div>

                    </div>

                </div>


                <div class="error-main-message">

                    <div class="error-label">
                        Main compiler message
                    </div>

                    <div class="error-message-row">

                        ${locationHTML}

                        <code>
                            ${escapeHTML(
                                errorInfo.message
                            )}
                        </code>

                    </div>

                </div>


                <div class="error-tip">

                    <div class="error-tip-title">
                        Tip
                    </div>

                    <div>
                        ${escapeHTML(
                            errorInfo.tip
                        )}
                    </div>

                </div>


                <details class="error-details">

                    <summary>
                        View full compiler output
                    </summary>

                    <pre>${escapeHTML(
                        error
                    )}</pre>

                </details>

            </div>
        `;


    saveResultState();


    renderProblemProgress();
}



/* ========================================= */
/* SERVER / RUNTIME ERROR                    */
/* ========================================= */

function showServerError(
    error
)
{
    results.classList.remove(
        "running-results"
    );


    passedCount.textContent =
        "0";


    testProgressBar.style.width =
        "0%";


    markTestsNotRun();


    delete completedProblems[
        currentProblem
    ];

    attemptedProblems[
        currentProblem
        ] =
            true;


    const errorText =
        String(error);


    let titleText =
        "Runtime Error";


    let descriptionText =
        "Your code could not finish running successfully.";


    let tipText =
        "Check your array indexes, loops, and any operations that could access invalid memory.";


    if (
        errorText
            .toLowerCase()
            .includes(
                "too long"
            ) ||
        errorText
            .toLowerCase()
            .includes(
                "timeout"
            )
    )
    {
        titleText =
            "Time Limit Exceeded";


        descriptionText =
            "Your code started running, but it did not finish in time.";


        tipText =
            "Check your loop condition and make sure the loop eventually stops. An infinite loop is a common cause.";
    }


    results.innerHTML =
        `
            <div class="error-card runtime-error-card">

                <div class="error-card-heading">

                    <div class="error-icon">
                        !
                    </div>

                    <div>

                        <div class="error-title">
                            ${escapeHTML(
                                titleText
                            )}
                        </div>

                        <div class="error-subtitle">
                            ${escapeHTML(
                                descriptionText
                            )}
                        </div>

                    </div>

                </div>


                <div class="error-tip">

                    <div class="error-tip-title">
                        Things to check
                    </div>

                    <div>
                        ${escapeHTML(
                            tipText
                        )}
                    </div>

                </div>


                <details class="error-details">

                    <summary>
                        View technical details
                    </summary>

                    <pre>${escapeHTML(
                        errorText
                    )}</pre>

                </details>

            </div>
        `;


    saveResultState();


    renderProblemProgress();
}

/* ========================================= */
/* GRADE OUTPUT                              */
/* ========================================= */

function formatActual(
    actual,
    problemId
)
{
    if (problemId.startsWith("dll_")) return actual.trim();
    const cleaned =
        actual.trim();


    if (
        cleaned === ""
    )
    {
        return "No valid result";
    }


    /*
        Boolean results should stay as:
        true
        false
    */
    if (
        problemId === "search"
    )
    {
        return cleaned;
    }


    /*
        exchangeFirst has two DArrays in its result,
        so keep the grader's formatted output.
    */
    if (
        problemId === "exchangeFirst"
    )
    {
        return cleaned;
    }


    /*
        All remaining problems return one DArray.
        The graders print values separated by spaces.

        Example:
            6 5 3

        Display as:
            [6, 5, 3]
    */
    const values =
        cleaned
            .split(/\s+/)
            .filter(
                value =>
                    value !== ""
            );


    return (
        "[" +
        values.join(", ") +
        "]"
    );
}



/* ========================================= */
/* CREATE RESULT CARD                        */
/* ========================================= */

function createResultCard(
    testPassed,
    testNumber,
    test,
    formattedActual
)
{
    const card =
        document.createElement(
            "div"
        );


    card.className =
        testPassed
            ? "test-pass"
            : "test-fail";


    const symbol =
        testPassed
            ? "✓"
            : "✕";


    const status =
        testPassed
            ? "passed"
            : "failed";


    card.innerHTML =
        `
            ${symbol} <b>
                Test ${testNumber} ${status}
            </b>

            <div class="result-detail">

                Input:
                ${escapeHTML(
                    test.input
                )}

                <br>

                Expected:
                ${escapeHTML(
                    test.expected
                )}

                <br>

                Actual:
                ${escapeHTML(
                    formattedActual
                )}

            </div>
        `;


    return card;
}



/* ========================================= */
/* GRADE OUTPUT                              */
/* ========================================= */

async function gradeOutput(
    output,
    problem
)
{
    results.classList.remove(
        "running-results"
    );


    const lines =
        output
            .split(/\r?\n/)
            .filter(
                line =>
                    line.startsWith(
                        "TEST"
                    )
            );


    const testResults =
        [];


    for (
        let i = 0;
        i < problem.tests.length;
        ++i
    )
    {
        const line =
            lines[i] || "";


        const pieces =
            line.split("|");


        const testPassed =
            pieces[1] ===
            "PASS";


        const actual =
            pieces
                .slice(2)
                .join("|");


        const formattedActual =
            formatActual(
                actual,
                problem.id
            );


        testResults.push(
            {
                passed:
                    testPassed,

                actual:
                    formattedActual
            }
        );
    }


    /*
        Clear the "Running tests..." message.

        The test cards will now be inserted one at a
        time so the student can see the grader work
        through the tests.
    */
    results.innerHTML =
        "";


    passedCount.textContent =
        "0";


    totalCount.textContent =
        problem.tests.length;


    testProgressBar.style.width =
        "0%";


    createTestIndicators(
        problem.tests.length
    );


    const dots =
        testIndicators.children;


    let passed =
        0;


    /*
        Reveal each test one at a time.
    */
    for (
        let i = 0;
        i < problem.tests.length;
        ++i
    )
    {
        const currentResult =
            testResults[i];


        if (
            currentResult.passed
        )
        {
            ++passed;


            dots[i].classList.add(
                "pass"
            );


            dots[i].textContent =
                "✓";
        }

        else
        {
            dots[i].classList.add(
                "fail"
            );


            dots[i].textContent =
                "✕";
        }


        const card =
            createResultCard(
                currentResult.passed,
                i + 1,
                problem.tests[i],
                currentResult.actual
            );


        results.appendChild(
            card
        );


        /*
            Update the score as each test appears.
        */
        passedCount.textContent =
            passed;


        const progress =
            (
                (i + 1) /
                problem.tests.length
            ) * 100;


        testProgressBar.style.width =
            `${progress}%`;


        /*
            Keep the newest result visible if the
            results area needs to scroll.
        */
        card.scrollIntoView(
            {
                behavior:
                    "smooth",

                block:
                    "nearest"
            }
        );


        /*
            Small pause before revealing the next test.
        */
        await wait(
            350
        );
    }


    /*
        Add the final result summary only after all
        individual tests have been revealed.
    */
    const summary =
        document.createElement(
            "div"
        );



if (
    passed ===
    problem.tests.length
)
{
    summary.className =
        "result-summary all-passed";


    summary.innerHTML =
        `
            <div class="success-summary-left">

                <div class="success-summary-icon">
                    ✓
                </div>

                <div>
                    <span class="success-summary-title">
                        All tests passed!
                    </span>

                    <span class="success-summary-subtitle">
                        Nice work — your solution passed every test.
                    </span>
                </div>

            </div>

            <strong>
                ${passed} /
                ${problem.tests.length}
            </strong>
        `;
}

else
{
    summary.className =
        "result-summary";


    summary.innerHTML =
        `
            <span>
                Tests completed
            </span>

            <strong>
                ${passed} /
                ${problem.tests.length}
                passed
            </strong>
        `;
}


results.appendChild(
    summary
);


    const wasAlreadyCompleted =
    completedProblems[
        currentProblem
    ] === true;


attemptedProblems[
    currentProblem
] =
    true;


if (
    passed ===
    problem.tests.length
)
{
    completedProblems[
        currentProblem
    ] =
        true;
}

else
{
    delete completedProblems[
        currentProblem
    ];
}


saveResultState();


renderProblemProgress();


/*
    Only play the completion animation when the
    problem changes from incomplete to completed.

    Re-running an already completed problem will
    not replay the animation every time.
*/
if (
    passed ===
        problem.tests.length &&
    !wasAlreadyCompleted
)
{
    const currentStep =
        problemProgress.querySelector(
            ".problem-step.current"
        );


    if (
        currentStep !== null
    )
    {
        currentStep.classList.add(
            "just-completed"
        );


        setTimeout(
            () =>
            {
                currentStep.classList.remove(
                    "just-completed"
                );
            },

            700
        );
    }
}


    //saveResultState();


    //renderProblemProgress();
}



/* ========================================= */
/* ESCAPE HTML                               */
/* ========================================= */

function escapeHTML(
    text
)
{
    return String(text)

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        );
}



/* ========================================= */
/* PANEL RESIZER                             */
/* ========================================= */

let resizing =
    false;


panelResizer.addEventListener(
    "pointerdown",

    event =>
    {
        resizing =
            true;


        document.body.classList.add(
            "resizing-panels"
        );


        panelResizer.classList.add(
            "dragging"
        );


        panelResizer.setPointerCapture(
            event.pointerId
        );
    }
);


panelResizer.addEventListener(
    "pointermove",

    event =>
    {
        if (
            !resizing
        )
        {
            return;
        }


        resizeEditorToPointer(
            event.clientY
        );
    }
);


panelResizer.addEventListener(
    "pointerup",

    event =>
    {
        resizing =
            false;


        document.body.classList.remove(
            "resizing-panels"
        );


        panelResizer.classList.remove(
            "dragging"
        );


        if (
            panelResizer.hasPointerCapture(
                event.pointerId
            )
        )
        {
            panelResizer.releasePointerCapture(
                event.pointerId
            );
        }
    }
);


panelResizer.addEventListener(
    "pointercancel",

    () =>
    {
        resizing =
            false;


        document.body.classList.remove(
            "resizing-panels"
        );


        panelResizer.classList.remove(
            "dragging"
        );
    }
);



/* ========================================= */
/* RESIZE EDITOR                             */
/* ========================================= */

function resizeEditorToPointer(
    pointerY
)
{
    const panelRect =
        codingPanel.getBoundingClientRect();


    const dividerHeight =
        panelResizer.offsetHeight;


    const minimumEditorHeight =
        250;


    const minimumResultsHeight =
        190;


    const maximumEditorHeight =
        panelRect.height -
        minimumResultsHeight -
        dividerHeight;


    let newEditorHeight =
        pointerY -
        panelRect.top;


    newEditorHeight =
        Math.max(
            minimumEditorHeight,
            Math.min(
                newEditorHeight,
                maximumEditorHeight
            )
        );


    editorSection.style.height =
        `${newEditorHeight}px`;


    editorSection.style.flex =
        "0 0 auto";


    editor.refresh();
}



/* ========================================= */
/* KEYBOARD RESIZER                          */
/* ========================================= */

panelResizer.addEventListener(
    "keydown",

    event =>
    {
        if (
            event.key !==
            "ArrowUp" &&
            event.key !==
            "ArrowDown"
        )
        {
            return;
        }


        event.preventDefault();


        const panelRect =
            codingPanel.getBoundingClientRect();


        const editorRect =
            editorSection.getBoundingClientRect();


        let newHeight =
            editorRect.height;


        if (
            event.key ===
            "ArrowUp"
        )
        {
            newHeight -=
                25;
        }

        else
        {
            newHeight +=
                25;
        }


        const minimumEditorHeight =
            250;


        const minimumResultsHeight =
            190;


        const maximumEditorHeight =
            panelRect.height -
            minimumResultsHeight -
            panelResizer.offsetHeight;


        newHeight =
            Math.max(
                minimumEditorHeight,
                Math.min(
                    newHeight,
                    maximumEditorHeight
                )
            );


        editorSection.style.height =
            `${newHeight}px`;


        editorSection.style.flex =
            "0 0 auto";


        editor.refresh();
    }
);



/* ========================================= */
/* WINDOW RESIZE                             */
/* ========================================= */

window.addEventListener(
    "resize",

    () =>
    {
        editor.refresh();
    }
);



/* ========================================= */
/* START                                     */
/* ========================================= */


const classReference=document.querySelector('.reference-section');
let referenceAnimation=null;
function resetReferenceAnimation(){
 if(referenceAnimation){referenceAnimation.cancel();referenceAnimation=null;}
 classReference.style.height='';classReference.style.overflow='';
}
classReference.querySelector('summary').addEventListener('click',event=>{
 event.preventDefault();
 const expanded=classReference.open;
 const start=classReference.getBoundingClientRect().height;
 resetReferenceAnimation();
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){classReference.open=!expanded;return;}
 classReference.open=!expanded;
 const end=classReference.getBoundingClientRect().height;
 if(expanded)classReference.open=true;
 classReference.style.overflow='hidden';
 referenceAnimation=classReference.animate([{height:start+'px'},{height:end+'px'}],{duration:260,easing:'cubic-bezier(.2,.7,.2,1)'});
 referenceAnimation.onfinish=()=>{classReference.open=!expanded;resetReferenceAnimation();};
});

const topicInputs=Array.from(document.querySelectorAll('input[name="practice-topic"]'));
const referenceCode=document.querySelector('.reference-code code');
const darrayReference=referenceCode.textContent;
function switchTopic(topic){
 if(testsRunning||!['darray','dll','sll'].includes(topic))return;
 saveCurrentCode();
 topicStates[currentTopic]={currentProblem,savedCode,savedResults,attemptedProblems,completedProblems,savedHintLevels,openedHints};
 currentTopic=topic; problems=topicList(topic);
 const state=topicStates[topic]||{};
 currentProblem=state.currentProblem||0;
 savedCode=state.savedCode||{};savedResults=state.savedResults||{};attemptedProblems=state.attemptedProblems||{};completedProblems=state.completedProblems||{};savedHintLevels=state.savedHintLevels||{};openedHints=state.openedHints||{};
 referenceCode.textContent=topic==='sll'?sllReference:topic==='dll'?"#ifndef DOUBLYLIST_H\n#define DOUBLYLIST_H\n\n#include <iostream>\n\nclass DLLNode\n{\npublic:\n    DLLNode()\n        : data(0),\n          prev(nullptr),\n          next(nullptr) {}\n\n    DLLNode(\n        int theData,\n        DLLNode* prevLink,\n        DLLNode* nextLink\n    )\n        : data(theData),\n          prev(prevLink),\n          next(nextLink) {}\n\n    int getData() const\n    {\n        return data;\n    }\n\n    DLLNode* getPrev() const\n    {\n        return prev;\n    }\n\n    DLLNode* getNext() const\n    {\n        return next;\n    }\n\n    void setData(int theData)\n    {\n        data = theData;\n    }\n\n    void setPrev(DLLNode* prevLink)\n    {\n        prev = prevLink;\n    }\n\n    void setNext(DLLNode* nextLink)\n    {\n        next = nextLink;\n    }\n\n    ~DLLNode() {}\n\nprivate:\n    int data;\n    DLLNode* prev;\n    DLLNode* next;\n};\n\nclass DoublyList\n{\npublic:\n    DoublyList()\n        : first(nullptr),\n          last(nullptr),\n          count(0) {}\n\n    void insertFront(int newData);\n\n    void printForward() const;\n    void printReverse() const;\n\n    void deleteElement(int value);\n    void clearList();\n\n    ~DoublyList();\n\n    friend class DoublyListGrader;\n\nprivate:\n    DLLNode* first;\n    DLLNode* last;\n    int count;\n};\n\n#endif":darrayReference;
 document.querySelector('.section-label').textContent=topic==='sll'?'SINGLY LINKED LIST PRACTICE':topic==='dll'?'DOUBLY LINKED LIST PRACTICE':'DARRAY PRACTICE';
 document.querySelector('.hint-section').hidden=false;
 resetReferenceAnimation();
 document.querySelector('.reference-section').open=false;
 topicInputs.forEach(input => input.checked = input.value === topic);loadProblem();
}
topicInputs.forEach(input => input.addEventListener('change',()=>{if(input.checked)switchTopic(input.value);}));
Object.assign(problemHints, {"dll_1_deleteFirst":[{"type":"Concept","text":"Deleting a node means removing it from both directions of the chain, then releasing its memory. Consider whether the node is also first or last."},{"type":"Approach","text":"Locate first. Save its previous and next neighbors before deleting it. Connect those neighbors to each other, or update first or last when a neighbor is absent."},{"type":"Code Structure","text":"Use getPrev() and getNext() to save both neighbors. Update the previous neighbor with setNext() and the next neighbor with setPrev(). Handle nullptr neighbors through first and last, delete the removed node, then decrease count. A one-node deletion must leave both endpoints nullptr."}],"dll_2_deleteSecond":[{"type":"Concept","text":"Deleting a node means removing it from both directions of the chain, then releasing its memory. Consider whether the node is also first or last."},{"type":"Approach","text":"Locate first->getNext(). Save its previous and next neighbors before deleting it. Connect those neighbors to each other, or update first or last when a neighbor is absent."},{"type":"Code Structure","text":"Use getPrev() and getNext() to save both neighbors. Update the previous neighbor with setNext() and the next neighbor with setPrev(). Handle nullptr neighbors through first and last, delete the removed node, then decrease count. A one-node deletion must leave both endpoints nullptr."}],"dll_3_deleteLast":[{"type":"Concept","text":"Deleting a node means removing it from both directions of the chain, then releasing its memory. Consider whether the node is also first or last."},{"type":"Approach","text":"Locate last. Save its previous and next neighbors before deleting it. Connect those neighbors to each other, or update first or last when a neighbor is absent."},{"type":"Code Structure","text":"Use getPrev() and getNext() to save both neighbors. Update the previous neighbor with setNext() and the next neighbor with setPrev(). Handle nullptr neighbors through first and last, delete the removed node, then decrease count. A one-node deletion must leave both endpoints nullptr."}],"dll_4_deleteBeforeLast":[{"type":"Concept","text":"Deleting a node means removing it from both directions of the chain, then releasing its memory. Consider whether the node is also first or last."},{"type":"Approach","text":"Locate last->getPrev(). Save its previous and next neighbors before deleting it. Connect those neighbors to each other, or update first or last when a neighbor is absent."},{"type":"Code Structure","text":"Use getPrev() and getNext() to save both neighbors. Update the previous neighbor with setNext() and the next neighbor with setPrev(). Handle nullptr neighbors through first and last, delete the removed node, then decrease count. A one-node deletion must leave both endpoints nullptr."}],"dll_5_deleteMiddle":[{"type":"Concept","text":"Deleting a node means removing it from both directions of the chain, then releasing its memory. Consider whether the node is also first or last."},{"type":"Approach","text":"Locate the node reached after count / 2 next links. Save its previous and next neighbors before deleting it. Connect those neighbors to each other, or update first or last when a neighbor is absent."},{"type":"Code Structure","text":"Use getPrev() and getNext() to save both neighbors. Update the previous neighbor with setNext() and the next neighbor with setPrev(). Handle nullptr neighbors through first and last, delete the removed node, then decrease count. A one-node deletion must leave both endpoints nullptr."}],"dll_6_insertFront":[{"type":"Concept","text":"A new node needs a previous link and a next link. The neighboring nodes must also point back to it, and count must increase."},{"type":"Approach","text":"Place the new node before first. Identify the node on either side of that position before changing any links."},{"type":"Code Structure","text":"Create a DLLNode using the given value and the two neighbors. Reconnect each existing neighbor with setNext() or setPrev(); update first or last when inserting at an endpoint. Increase count once. If the list was empty, both first and last must refer to the new node."}],"dll_7_insertBack":[{"type":"Concept","text":"A new node needs a previous link and a next link. The neighboring nodes must also point back to it, and count must increase."},{"type":"Approach","text":"Place the new node after last. Identify the node on either side of that position before changing any links."},{"type":"Code Structure","text":"Create a DLLNode using the given value and the two neighbors. Reconnect each existing neighbor with setNext() or setPrev(); update first or last when inserting at an endpoint. Increase count once. If the list was empty, both first and last must refer to the new node."}],"dll_8_insertSecond":[{"type":"Concept","text":"A new node needs a previous link and a next link. The neighboring nodes must also point back to it, and count must increase."},{"type":"Approach","text":"Place the new node after first and before its next node. Identify the node on either side of that position before changing any links."},{"type":"Code Structure","text":"Create a DLLNode using the given value and the two neighbors. Reconnect each existing neighbor with setNext() or setPrev(); update first or last when inserting at an endpoint. Increase count once."}],"dll_9_insertBeforeLast":[{"type":"Concept","text":"A new node needs a previous link and a next link. The neighboring nodes must also point back to it, and count must increase."},{"type":"Approach","text":"Place the new node before last. Identify the node on either side of that position before changing any links."},{"type":"Code Structure","text":"Create a DLLNode using the given value and the two neighbors. Reconnect each existing neighbor with setNext() or setPrev(); update first or last when inserting at an endpoint. Increase count once."}],"dll_10_insertMiddle":[{"type":"Concept","text":"A new node needs a previous link and a next link. The neighboring nodes must also point back to it, and count must increase."},{"type":"Approach","text":"Place the new node before the existing middle node. Identify the node on either side of that position before changing any links. Follow count / 2 next links from first to locate the existing middle."},{"type":"Code Structure","text":"Create a DLLNode using the given value and the two neighbors. Reconnect each existing neighbor with setNext() or setPrev(); update first or last when inserting at an endpoint. Increase count once."}],"dll_11_swapFirstLast":[{"type":"Concept","text":"This problem swaps the integers stored in two nodes. The nodes, their links, and the list counts stay in place."},{"type":"Approach","text":"Locate first and last."},{"type":"Code Structure","text":"Save one node's getData() value in a temporary integer. Use setData() to copy the other value into the first node, then store the temporary value in the other node. Do not allocate or delete nodes."}],"dll_12_swapFirstSecond":[{"type":"Concept","text":"This problem swaps the integers stored in two nodes. The nodes, their links, and the list counts stay in place."},{"type":"Approach","text":"Locate first and first->getNext()."},{"type":"Code Structure","text":"Save one node's getData() value in a temporary integer. Use setData() to copy the other value into the first node, then store the temporary value in the other node. Do not allocate or delete nodes."}],"dll_13_swapFirstBeforeLast":[{"type":"Concept","text":"This problem swaps the integers stored in two nodes. The nodes, their links, and the list counts stay in place."},{"type":"Approach","text":"Locate first and last->getPrev()."},{"type":"Code Structure","text":"Save one node's getData() value in a temporary integer. Use setData() to copy the other value into the first node, then store the temporary value in the other node. Do not allocate or delete nodes."}],"dll_14_swapFirstMiddle":[{"type":"Concept","text":"This problem swaps the integers stored in two nodes. The nodes, their links, and the list counts stay in place."},{"type":"Approach","text":"Locate first and the node reached after count / 2 next links."},{"type":"Code Structure","text":"Save one node's getData() value in a temporary integer. Use setData() to copy the other value into the first node, then store the temporary value in the other node. Do not allocate or delete nodes. Locate the middle by following count / 2 next links from first."}],"dll_15_swapSecondLast":[{"type":"Concept","text":"This problem swaps the integers stored in two nodes. The nodes, their links, and the list counts stay in place."},{"type":"Approach","text":"Locate first->getNext() and last."},{"type":"Code Structure","text":"Save one node's getData() value in a temporary integer. Use setData() to copy the other value into the first node, then store the temporary value in the other node. Do not allocate or delete nodes."}],"dll_16_swapFirstFirst":[{"type":"Concept","text":"This problem swaps the integers stored in two nodes. The nodes, their links, and the list counts stay in place."},{"type":"Approach","text":"Locate first and otherList.first. A DoublyList member function can access the private first and last pointers of another DoublyList object."},{"type":"Code Structure","text":"Save one node's getData() value in a temporary integer. Use setData() to copy the other value into the first node, then store the temporary value in the other node. Do not allocate or delete nodes."}],"dll_17_swapFirstLast":[{"type":"Concept","text":"This problem swaps the integers stored in two nodes. The nodes, their links, and the list counts stay in place."},{"type":"Approach","text":"Locate first and otherList.last. A DoublyList member function can access the private first and last pointers of another DoublyList object."},{"type":"Code Structure","text":"Save one node's getData() value in a temporary integer. Use setData() to copy the other value into the first node, then store the temporary value in the other node. Do not allocate or delete nodes."}],"dll_18_swapFirstSecond":[{"type":"Concept","text":"This problem swaps the integers stored in two nodes. The nodes, their links, and the list counts stay in place."},{"type":"Approach","text":"Locate first and otherList.first->getNext(). A DoublyList member function can access the private first and last pointers of another DoublyList object."},{"type":"Code Structure","text":"Save one node's getData() value in a temporary integer. Use setData() to copy the other value into the first node, then store the temporary value in the other node. Do not allocate or delete nodes."}],"dll_19_swapFirstBeforeLast":[{"type":"Concept","text":"This problem swaps the integers stored in two nodes. The nodes, their links, and the list counts stay in place."},{"type":"Approach","text":"Locate first and otherList.last->getPrev(). A DoublyList member function can access the private first and last pointers of another DoublyList object."},{"type":"Code Structure","text":"Save one node's getData() value in a temporary integer. Use setData() to copy the other value into the first node, then store the temporary value in the other node. Do not allocate or delete nodes."}],"dll_20_swapSecondFirst":[{"type":"Concept","text":"This problem swaps the integers stored in two nodes. The nodes, their links, and the list counts stay in place."},{"type":"Approach","text":"Locate first->getNext() and otherList.first. A DoublyList member function can access the private first and last pointers of another DoublyList object."},{"type":"Code Structure","text":"Save one node's getData() value in a temporary integer. Use setData() to copy the other value into the first node, then store the temporary value in the other node. Do not allocate or delete nodes."}]});

loadProblem();
if (document.modelContext?.registerTool) {
 try {
  Promise.resolve(document.modelContext.registerTool({
   name:'select_darray_problem',
   description:'Select a DArray or Doubly Linked List practice problem in the workspace.',
   inputSchema:{type:'object',properties:{problem:{type:'string',enum:[...darrayProblems,...dllProblems,...sllProblems].map(p=>p.id)}},required:['problem'],additionalProperties:false},
   execute(input){
    const group=sllProblems.some(p=>p.id===input.problem)?'sll':dllProblems.some(p=>p.id===input.problem)?'dll':'darray';
    const list=topicList(group);
    const index=list.findIndex(p=>p.id===input.problem);
    if(index<0||testsRunning)throw new Error('Unknown problem or tests are running.');
    if(group!==currentTopic)switchTopic(group);
    saveCurrentCode();currentProblem=index;loadProblem();
    return {topic:currentTopic,problem:problems[index].id};
   }
  })).catch(console.error);
 } catch(error){console.error(error);}
}

// Save drafts and progress on this browser, and celebrate completion.
const storageKey='jacen-cpp-practice-v1';
let restoring=false, celebrated={};
const notice=document.createElement('div'); notice.className='save-notice';notice.textContent='Work saves in this browser';document.querySelector('#editor-section').prepend(notice);
function persistWork(){
 if(restoring)return;
 savedCode[currentProblem]=editor.getValue();
 topicStates[currentTopic]={currentProblem,savedCode,completedProblems,attemptedProblems,savedHintLevels,openedHints};
 const topics={};
 for(const name of ['darray','dll','sll']){const s=topicStates[name]||{};topics[name]={currentProblem:s.currentProblem||0,savedCode:s.savedCode||{},completedProblems:s.completedProblems||{},attemptedProblems:s.attemptedProblems||{},savedHintLevels:s.savedHintLevels||{},openedHints:s.openedHints||{}};}
 try{localStorage.setItem(storageKey,JSON.stringify({version:1,topic:currentTopic,topics,celebrated}));notice.textContent='Saved in this browser';}catch{notice.textContent='Browser saving unavailable';}
}
function celebrateAll(){
 const done=problems.every((_,i)=>completedProblems[i]===true);
 if(!done||celebrated[currentTopic])return;celebrated[currentTopic]=true;persistWork();
 const dialog=document.createElement('dialog');dialog.className='completion-dialog';dialog.setAttribute('aria-labelledby','completion-title');
 const topicName=topicLabel(currentTopic);
 dialog.innerHTML='<div class="completion-trophy" aria-hidden="true">🏆</div><h2 id="completion-title">Congratulations!</h2><p>You completed every '+topicName+' question.<br>Great work!</p><button type="button">Keep practicing</button>';
 document.body.append(dialog);dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('close',()=>dialog.remove(),{once:true});dialog.showModal();
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const confetti=document.createElement('div');confetti.className='practice-confetti';confetti.setAttribute('aria-hidden','true');for(let i=0;i<70;i++){const el=document.createElement('i');el.style.left=Math.random()*100+'%';el.style.background=['#7891ff','#ffc857','#62be91','#ef83bb'][i%4];el.style.animationDelay=Math.random()*.8+'s';el.style.setProperty('--drift',(Math.random()*200-100)+'px');confetti.append(el);}dialog.append(confetti);setTimeout(()=>confetti.remove(),4200);}
}
const previousLoad=loadProblem;loadProblem=function(){previousLoad();persistWork();};
const previousSaveResult=saveResultState;saveResultState=function(){previousSaveResult();persistWork();celebrateAll();};
const previousProgress=renderProblemProgress;renderProblemProgress=function(){previousProgress();persistWork();};
restoring=true;
try{
 const snapshot=JSON.parse(localStorage.getItem(storageKey)||'null');
 if(snapshot?.version===1&&snapshot.topics){const states={};
 for(const name of ['darray','dll','sll']){const raw=snapshot.topics[name]||{},list=topicList(name);const state={currentProblem:Number.isInteger(raw.currentProblem)&&raw.currentProblem>=0&&raw.currentProblem<list.length?raw.currentProblem:0};
 for(const key of ['savedCode','completedProblems','attemptedProblems','savedHintLevels','openedHints']){state[key]={};list.forEach((_,i)=>{const v=raw[key]?.[i];if(key==='savedCode'?typeof v==='string'&&v.length<=20000:key==='savedHintLevels'?Number.isInteger(v)&&v>=0&&v<=3:typeof v==='boolean')state[key][i]=v;});}states[name]=state;topicStates[name]=state;}
 celebrated={darray:snapshot.celebrated===true||snapshot.celebrated?.darray===true,dll:snapshot.celebrated===true||snapshot.celebrated?.dll===true,sll:snapshot.celebrated?.sll===true};const target=['darray','dll','sll'].includes(snapshot.topic)?snapshot.topic:'darray';currentTopic=target==='dll'?'darray':'dll';switchTopic(target);for(const name of ['darray','dll','sll'])topicStates[name]=states[name];notice.textContent='Restored work from this browser';
 }
}catch{notice.textContent='Browser saving unavailable';}
restoring=false;
if(typeof editor.on==='function')editor.on('change',persistWork);else document.querySelector('#editor-section textarea')?.addEventListener('input',persistWork);
window.addEventListener('pagehide',persistWork);document.addEventListener('visibilitychange',()=>{if(document.hidden)persistWork();});

function showGradingUnavailable() {
 results.classList.remove('running-results');
 markTestsNotRun();
 results.innerHTML = '<div class="error-card service-status-card" role="status"><div class="service-status-header"><span class="service-status-icon" aria-hidden="true">↻</span><div><h3>Grading temporarily unavailable</h3><p>The compiler service couldn’t run your tests.</p></div></div><div class="service-status-body"><div class="service-saved"><span aria-hidden="true">✓</span> Your code and progress are safe</div><p>Please wait a moment, then select <strong>Run Tests</strong> again.</p></div></div>';
 saveResultState();
 renderProblemProgress();
}
// A connection failure also leaves previously earned completion intact.
showServerError = function() { showGradingUnavailable(); };

// Anonymous visits and topic completion totals. Never send code or names.
let trackingBrowserId = null;
try {
 trackingBrowserId = localStorage.getItem('jacen-practice-browser-id');
 if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(trackingBrowserId || '')) {
  trackingBrowserId = crypto.randomUUID();
  localStorage.setItem('jacen-practice-browser-id', trackingBrowserId);
 }
} catch { /* No stable browser storage: do not inflate unique-browser totals. */ trackingBrowserId = null; }
let lastTrackingAttempt = 0, trackingPending = false, trackingQueued = false;
async function trackPractice(force = false) {
 if (!trackingBrowserId) return;
 if (trackingPending) { if (force) trackingQueued = true; return; }
 if (!force && Date.now() - lastTrackingAttempt < 60000) return;
 lastTrackingAttempt = Date.now(); trackingPending = true;
 const complete = name => (topicList(name)).every((_,i) => (name === currentTopic ? completedProblems : topicStates[name]?.completedProblems || {})[i] === true);
 try { await fetch('/api/track', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({browserId:trackingBrowserId,darray:complete('darray'),dll:complete('dll'),sll:complete('sll')}), keepalive:true }); }
 catch { /* Tracking cannot interrupt practice. Retry on later activity. */ }
 finally { trackingPending = false; if (trackingQueued) { trackingQueued = false; trackPractice(true); } }
}
const saveResultWithTracking = saveResultState;
saveResultState = function() { saveResultWithTracking(); trackPractice(true); };
for (const event of ['pointerdown','keydown']) document.addEventListener(event, () => trackPractice(), { passive:true });
document.addEventListener('visibilitychange', () => { if (!document.hidden) trackPractice(); });
trackPractice(true);
const trackingNote=document.createElement('div');trackingNote.className='save-notice';trackingNote.textContent='Anonymous visits and completion totals help improve this practice site.';document.querySelector('#results-panel').append(trackingNote);

// Reset only the selected topic; historical teacher analytics remain cumulative.
const clearTopicButton = document.getElementById('clear-topic');
clearTopicButton.addEventListener('click', () => {
 if (testsRunning) return;
 const topicName = topicLabel(currentTopic);
 if (!window.confirm('Clear all saved code, test results, and completion progress for ' + topicName + '? This cannot be undone. The other topic will keep its work.')) return;
 savedCode = {};
 savedResults = {};
 attemptedProblems = {};
 completedProblems = {};
 savedHintLevels = {};
 openedHints = {};
 celebrated[currentTopic] = false;
 editor.setValue(starterCode());
 topicStates[currentTopic] = { currentProblem, savedCode, savedResults, attemptedProblems, completedProblems, savedHintLevels, openedHints };
 loadProblem();
 persistWork();
 editor.focus();
});
const controlsBeforeClear = updateControls;
updateControls = function() { controlsBeforeClear(); clearTopicButton.disabled = testsRunning; };
updateControls();
