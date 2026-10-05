#ifndef DOUBLYLIST_H
#define DOUBLYLIST_H
#include <iostream>
class DLLNode {
public:
 DLLNode():data(0),prev(nullptr),next(nullptr){}
 DLLNode(int theData,DLLNode* prevLink,DLLNode* nextLink):data(theData),prev(prevLink),next(nextLink){}
 int getData() const{return data;}
 DLLNode* getPrev() const{return prev;}
 DLLNode* getNext() const{return next;}
 void setData(int theData){data=theData;}
 void setPrev(DLLNode* prevLink){prev=prevLink;}
 void setNext(DLLNode* nextLink){next=nextLink;}
 ~DLLNode(){}
private:
 int data; DLLNode* prev; DLLNode* next;
};
class DoublyList {
public:
 DoublyList():first(nullptr),last(nullptr),count(0){}
 void insertFront(int newData);
 void printForward() const;
 void printReverse() const;
 void deleteElement(int value);
 void deleteFirst(); void deleteSecond(); void deleteLast(); void deleteBeforeLast(); void deleteMiddle();
 void insertBack(int newData); void insertSecond(int newData); void insertBeforeLast(int newData); void insertMiddle(int newData);
 void swapFirstLast(); void swapFirstSecond(); void swapFirstBeforeLast(); void swapFirstMiddle(); void swapSecondLast();
 void swapFirstFirst(DoublyList& otherList); void swapFirstLast(DoublyList& otherList); void swapFirstSecond(DoublyList& otherList); void swapFirstBeforeLast(DoublyList& otherList); void swapSecondFirst(DoublyList& otherList);
 void clearList(); ~DoublyList();
 friend class DoublyListGrader;
private:
 DLLNode* first; DLLNode* last; int count;
};
#endif
