package com.spring.maxgames.DataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.maxgames.DataModel.Data;

public interface DataRepo extends JpaRepository<Data, Long> {

}
