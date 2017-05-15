$(function() { 
	// tutaj trafi cała nasza aplikacja
	function randomString() { 
    	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    	var str = '';
    	for (i = 0; i < 10; i++) {
        	str += chars[Math.floor(Math.random() * chars.length)];
    	}
    	return str;
	}

	function Column(name) {
    	var self = this; // przyda się dla funkcji zagnieżdżonych

    	this.id = randomString();
    	this.name = name;
    	this.$element = createColumn();

    	function createColumn() { 
    	// TWORZENIE ELEMENTÓW SKŁADOWYCH KOLUMNY
    		var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete').text('x');
			var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');

			// PODPINANIE ODPOWIEDNICH ZDARZEŃ
			$columnDelete.click(function() {
        	self.removeColumn();
			});
			//Dodawanie karteczki po kliknięciu w przycisk:
			$columnAddCard.click(function() {
        	self.addCard(new Card(prompt("Wpisz nazwę karty")));
			});

			// KONSTRUOWANIE ELEMENTU KOLUMNY
			$column.append($columnTitle)
        		.append($columnDelete)
        		.append($columnAddCard)
        		.append($columnCardList);

        	// ZWRACANIE STWORZONEJ  KOLUMNY
			return $column;
    	}
  	}

  	Column.prototype = {
    	addCard: function(card) {
      		this.$element.children('ul').append(card.$element);
    	},
    	removeColumn: function() {
      		this.$element.remove();
    	}
	};

	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard();

		function createCard() {
			// TWORZENIE KLOCKÓW
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete').text('x');

			// PRZYPIĘCIE ZDARZENIA
			$cardDelete.click(function(){
        		self.removeCard();
			});

			// SKŁADANIE I ZWRACANIE KARTY
			$card.append($cardDelete)
				.append($cardDescription);
			return $card;
		}
	}

	Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}
	}

	var board = {
    	name: 'Tablica Kanban',
    	addColumn: function(column) {
      	this.$element.append(column.$element);
      	initSortable();
    	},
    	$element: $('#board .column-container')
	};

	function initSortable() {
    	$('.column-card-list').sortable({
      		connectWith: '.column-card-list',
      		placeholder: 'card-placeholder'
    	}).disableSelection();

    	$('.create-column')
  			.click(function(){
			var name = prompt('Wpisz nazwę kolumny');
			var column = new Column(name);
    		board.addColumn(column);
  		});
  	}

  	// TWORZENIE KOLUMN
	var todoColumn = new Column('Do zrobienia');
	var doingColumn = new Column('W trakcie');
	var doneColumn = new Column('Skończone');

	// DODAWANIE KOLUMN DO TABLICY
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	// TWORZENIE NOWYCH EGZEMPLARZY KART
	var card1 = new Card('Nowe zadanie');
	var card2 = new Card('Stworzyc tablice kanban');
	var card3 = new Card('Struktura HTML i stylizacja CSS');
	var card4 = new Card('Praktyka CSS');
	var card5 = new Card('Cięcie layoutu od grafika');
	var card6 = new Card('Responsywny layout');
	var card7 = new Card('Bootstrap');
	var card8 = new Card('Sass');
	var card9 = new Card('Git, GitLab, GitHub, Grunt');
	var card10 = new Card('Wprowadzenie do JavaScriptu 1');
	var card11 = new Card('Wprowadzenie do JavaScriptu 2');
	var card12 = new Card('jQuery - manipulacja elementami');
	var card13 = new Card('OOP - podejście obiektowe');
	var card14 = new Card('AJAX i API');

	// DODAWANIE KART DO KOLUMN
	todoColumn.addCard(card1);
	todoColumn.addCard(card14);
	doingColumn.addCard(card2);
	doingColumn.addCard(card13);
	doneColumn.addCard(card3);
	doneColumn.addCard(card4);
	doneColumn.addCard(card5);
	doneColumn.addCard(card6);
	doneColumn.addCard(card7);
	doneColumn.addCard(card8);
	doneColumn.addCard(card9);
	doneColumn.addCard(card10);
	doneColumn.addCard(card11);
})