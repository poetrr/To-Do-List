package com.todo.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.app.Model.Todo;

public interface TodoRepository extends JpaRepository<Todo,Long> {

}
