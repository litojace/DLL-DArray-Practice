#ifndef ANYLIST_H
#define ANYLIST_H

#include <iostream>

class Node
{
public:
    Node() : data(0), next(nullptr) {}
    Node(int theData, Node* newNext)
        : data(theData), next(newNext) {}

    Node* getNext() const { return next; }
    int getData() const { return data; }
    void setData(int theData) { data = theData; }
    void setNext(Node* newNext) { next = newNext; }
    ~Node() {}

private:
    int data;
    Node* next;
};

class AnyList
{
public:
    AnyList() : first(nullptr), count(0) {}

    void insertFront(int);
    void deleteFirst();
    void deleteSecond();
    void deleteLast();
    void deleteBeforeLast();
    void deleteMiddle();
    void insertBack(int newData);
    void insertSecond(int newData);
    void insertBeforeLast(int newData);
    void insertMiddle(int newData);
    void swapFirstLast();
    void swapFirstSecond();
    void swapFirstBeforeLast();
    void swapFirstMiddle();
    void swapSecondLast();
    void swapFirstFirst(AnyList& otherList);
    void swapFirstLast(AnyList& otherList);
    void swapFirstSecond(AnyList& otherList);
    void swapFirstBeforeLast(AnyList& otherList);
    void swapSecondFirst(AnyList& otherList);
    friend class AnyListGrader;

    void print() const;
    void clearList();
    ~AnyList();

private:
    Node* first;
    int count;
};

#endif