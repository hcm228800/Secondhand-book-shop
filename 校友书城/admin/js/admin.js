function book_m(){
				var font_color_book = document.getElementById("book_m");
				var font_color_person = document.getElementById("person_m");
				var font_color_inform = document.getElementById("inform_back");
				var font_color_trans = document.getElementById("transaction");
				
				var text_html_book = document.getElementById("body_right_book");
				var text_html_person = document.getElementById("body_right_person");
				text_html_book.style.display="block";
				text_html_person.style.display="none";
				
				font_color_book.style.color = "red";
				font_color_person.style.color = "black";
				font_color_inform.style.color = "black";
				font_color_trans.style.color = "black";
				
			}
		function person_m(){
				var font_color_book = document.getElementById("book_m");
				var font_color_person = document.getElementById("person_m");
				var font_color_inform = document.getElementById("inform_back");
				var font_color_trans = document.getElementById("transaction");
				
				var text_html_book = document.getElementById("body_right_book");
				var text_html_person = document.getElementById("body_right_person");
				text_html_book.style.display="none";
				text_html_person.style.display="block";
				
				font_color_book.style.color = "black";
				font_color_person.style.color = "red";
				font_color_inform.style.color = "black";
				font_color_trans.style.color = "black";
				
			}
			
			