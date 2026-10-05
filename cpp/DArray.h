#ifndef DARRAY_H
#define DARRAY_H

#include <iostream>

const int CAP = 50;


class DArray
{
public:
    DArray();

    DArray(int newCapacity);


    void addElement(int newElement);

    int getNumOfElements() const;

    void replaceElementAt(
        int newElement,
        int idx
    );

    bool compareArrays(
        const DArray& otherArray
    ) const;

    void printArray() const;


    // =================================
    // PRACTICE FUNCTIONS
    // =================================

    void deleteSecond();

    void swapSecondLast();

    void zeroFirstHalf();

    void replaceLast(int value);

    bool search(int value) const;

    void insertSecond(int value);

    void copyTo(DArray& otherArray) const;

    void copyOddFrom(
        const DArray& otherArray
    );

    void exchangeFirst(
        DArray& otherArray
    );


    ~DArray();


private:
    int* a;

    int capacity;

    int numOfElements;
};


#endif