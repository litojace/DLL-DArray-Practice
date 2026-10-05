
using namespace std;
void DoublyList::printForward() const {DLLNode* current=first;while(current!=nullptr){cout<<current->getData()<<" ";current=current->getNext();}}
void DoublyList::printReverse() const {DLLNode* current=last;while(current!=nullptr){cout<<current->getData()<<" ";current=current->getPrev();}}
void DoublyList::deleteElement(int value) {
 if(count==0){cerr<<"The list is empty.\n";}
 else if(count==1){delete first;first=nullptr;last=nullptr;--count;}
 else {DLLNode* current=first;bool found=false;while(!found&&current!=nullptr){if(current->getData()==value)found=true;else current=current->getNext();}
 if(!found)cerr<<"Element is not in the list.\n";
 else {current->getPrev()->setNext(current->getNext());current->getNext()->setPrev(current->getPrev());delete current;current=nullptr;--count;}}
}
void DoublyList::clearList(){DLLNode* temp=first;while(first!=nullptr){first=first->getNext();delete temp;temp=first;}last=nullptr;count=0;}
DoublyList::~DoublyList(){if(first!=nullptr)clearList();}
